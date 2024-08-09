const { MongoClient } = require("mongodb");
const express = require("express");
const cors = require('cors');
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const chokidar = require("chokidar");

dotenv.config();
const uri = process.env.MONGO_URI;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const client = new MongoClient(uri);
const dbName = "wordDatabase"; // You can change the database name
const collectionName = "words"; // You can change the collection name

// Function to load data from JSON file and insert it into MongoDB
async function loadData() {
  try {
    // Read data from word.json
    const filePath = path.join(__dirname, 'data', 'word.json');
    const data = fs.readFileSync(filePath, 'utf8');
    const words = JSON.parse(data);

    // Connect to MongoDB
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Insert only new documents
    for (const word of words) {
      const existing = await collection.findOne({ enWord: word.enWord });
      if (!existing) {
        await collection.insertOne(word);
        console.log(`Inserted: ${word.enWord}`);
      } else {
        console.log(`Already exists: ${word.enWord}`);
      }
    }
  } catch (err) {
    console.error("Error loading data:", err);
  } finally {
    await client.close();
  }
}

// Watch for changes in word.json
const watcher = chokidar.watch(path.join(__dirname, 'data', 'word.json'), {
  persistent: true,
});

watcher.on('change', () => {
  console.log('word.json has been updated. Reloading data...');
  loadData().catch(console.error);
});

// Route to get 10 random documents from MongoDB
app.get("/words", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    
    // Aggregation pipeline to get 10 random documents
    const words = await collection.aggregate([
      { $sample: { size: 10 } } // Randomly select 10 documents
    ]).toArray();

    res.json(words);
  } catch (err) {
    res.status(500).send(err.toString());
  } finally {
    await client.close();
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");

  // Initial load of data
  loadData().catch(console.error);
});
