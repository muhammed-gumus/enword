# EnWord - English Word Memorization App

EnWord is a simple yet effective English word memorization application designed to help users improve their vocabulary daily. The app provides 10 random English words each day, along with their Turkish translations. To reinforce learning, the app also offers example sentences for each word, helping users understand the usage and context of the words.

## Features

- **Daily Vocabulary**: Get 10 random English words every day with their Turkish translations.
- **Example Sentences**: Each word is accompanied by example sentences in English to help reinforce learning.
- **Simple Interface**: A clean and user-friendly interface developed with Next.js.
- **Backend Integration**: Node.js backend with MongoDB for storing and managing data.

## Tech Stack

### Frontend
- **Next.js**: React framework for building the frontend interface.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.

### Backend
- **Node.js**: JavaScript runtime for building the backend logic.
- **MongoDB**: NoSQL database for storing words, translations, and example sentences.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/muhammed-gumus/memory-word.git
   cd memory-word

2. **Install dependencies for both frontend and backend:**

   ```bash
   npm install
   
3. **Set up your environment variables:**
   Create a .env file in the root directory and add the following:
   
   ```bash
   MONGODB_URI=your_mongodb_connection_string
   NEXT_PUBLIC_API_URL=your_api_url

4. **Run the backend server:**
    
   ```bash
    npm run start:backend

5. **Run the frontend development server:**
   
   ```bash
    npm run dev

## Usage

- **Daily Words**: Log in daily to view your 10 random words.
- **Example Sentences**: Review the example sentences provided for each word.
- **Track Progress**: Consistently use the app to build and reinforce your English vocabulary over time.

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/muhammed-gumus/memory-word/issues) for any open issues.


## Contact

For any inquiries, feel free to reach out:

- **GitHub**: [muhammed-gumus](https://github.com/muhammed-gumus)
- **Email**: mgumus4102@gmail.com

