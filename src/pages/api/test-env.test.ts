// Import necessary modules for testing
import { createMocks } from 'node-mocks-http';
import handler from './test-env';

// Test suite for test-env API route
describe('API Route: /api/test-env', () => {
  it('should return a success message with database URL', async () => {
    // Create mock request and response objects
    const { req, res } = createMocks();

    // Call the API handler
    await handler(req, res);

    // Validate the response
    expect(res._getStatusCode()).toBe(200);
    expect(res._getData()).toEqual({
      message: 'Environment variables loaded successfully',
      databaseUrl: expect.any(String), // Check if it's a string
    });
  });

  it('should return an error if environment variables are not loaded', async () => {
    // Temporarily remove DATABASE_URL from process.env
    const originalEnv = process.env.DATABASE_URL;
    delete process.env.DATABASE_URL;

    const { req, res } = createMocks();

    // Call the API handler
    await handler(req, res);

    // Validate the response
    expect(res._getStatusCode()).toBe(500);
    expect(res._getData()).toEqual({
      error: 'Invalid environment variables: DATABASE_URL is required',
    });

    // Restore the original environment variable
    process.env.DATABASE_URL = originalEnv;
  });
});
