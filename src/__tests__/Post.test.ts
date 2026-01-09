import { render, screen } from '@testing-library/react';
import { Post } from '../models/Post';

describe('Post Model', () => {
  it('should create a post with valid data', () => {
    const post = new Post({ title: 'My First Post', content: 'Hello World!', authorId: 1 });
    expect(post.title).toBe('My First Post');
    expect(post.content).toBe('Hello World!');
  });

  it('should not allow a post without a title', async () => {
    await expect(Post.create({ content: 'Missing title', authorId: 1 })).rejects.toThrow();
  });
});
