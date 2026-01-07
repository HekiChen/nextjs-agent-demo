-- Initial migration for User model
CREATE TABLE "User" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(255),
  "email" VARCHAR(255) UNIQUE
);