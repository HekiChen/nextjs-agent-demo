# My Next.js App

## Project Setup Instructions

### Prerequisites
- Node.js (>= 14.x)
- PostgreSQL
- Yarn or npm

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/my-nextjs-app.git
   cd my-nextjs-app
   ```
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```
3. Create a `.env` file from the example:
   ```bash
   cp .env.example .env
   ```
4. Configure your PostgreSQL database connection in the `.env` file:
   ```env
   DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
   ```
5. Run the initial migrations:
   ```bash
   npx prisma migrate dev
   ```
6. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

### Running Tests
To run tests, use:
```bash
npm test
# or
yarn test
```

### Code Quality Tools
- ESLint and Prettier are configured. You can run:
```bash
npm run lint
# or
yarn lint
```

### CI/CD
This project includes a GitHub Actions workflow for CI/CD. Ensure your secrets are configured in the GitHub repository settings.
