# My Next.js App

## Project Overview
This is a demo application built with Next.js 14, TypeScript, Prisma, and PostgreSQL.

## Setup Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/my-nextjs-app.git
   cd my-nextjs-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the environment variables**:
   - Copy `.env.example` to `.env` and fill in your PostgreSQL credentials:
   ```bash
   cp .env.example .env
   ```

4. **Run Prisma migrations**:
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

## API Endpoints
### `GET /api/test-env`
- **Description**: Tests if environment variables are loaded correctly.
- **Response**:
  - `200 OK`: Returns a success message and the database URL.
  - `500 Internal Server Error`: Returns an error if environment variables are not loaded.

## Database Schema
### User
- **id**: Integer, Primary Key, Auto-increment
- **name**: String, max length 255
- **email**: String, Unique, max length 255
- **posts**: Relation to `Post`

### Post
- **id**: Integer, Primary Key, Auto-increment
- **title**: String, max length 255
- **content**: Text
- **published**: Boolean, default false
- **authorId**: Integer, Foreign Key to `User`

## Troubleshooting Guide
- **Database connection issues**: Ensure your PostgreSQL server is running and the credentials in `.env` are correct.
- **Environment variable errors**: Check that all required environment variables are defined in your `.env` file.

## Testing
Run tests using:
```bash
npm test
```