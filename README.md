# My Next.js App

## Project Setup

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-nextjs-app.git
   cd my-nextjs-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up your environment variables:
   - Copy `.env.example` to `.env` and fill in the required values.
4. Run the database migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Users
- **GET** `/api/users` - Retrieve all users
- **POST** `/api/users` - Create a new user

### Posts
- **GET** `/api/posts` - Retrieve all posts
- **POST** `/api/posts` - Create a new post

## Database Schema

### User Model
- `id`: Unique identifier for the user (Int)
- `name`: Name of the user (String)
- `email`: Email of the user (String, unique)
- `posts`: List of posts created by the user (Relation to Post)

### Post Model
- `id`: Unique identifier for the post (Int)
- `title`: Title of the post (String)
- `content`: Content of the post (String, optional)
- `published`: Publication status (Boolean)
- `authorId`: ID of the author (Int)
- `author`: Relation to User model

## Troubleshooting
- **Error: Database connection failed**
  - Ensure your PostgreSQL server is running and the connection string in `.env` is correct.
- **Error: Migration failed**
  - Check the database logs for more information on the migration error.

## Running Tests
To run the test suite, use:
```bash
npm test
```