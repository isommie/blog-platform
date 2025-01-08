const BlogPost = require('../models/BlogPost');

// Create a blog post
const createBlogPost = async (req, res) => {
  try {
    const blogPost = new BlogPost(req.body);
    await blogPost.save();
    res.status(201).json({ success: true, data: blogPost });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Read all blog posts
const getBlogPosts = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().sort({ createdAt: -1 });
    res.json({ success: true, data: blogPosts });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update a blog post
const updateBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await BlogPost.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPost) return res.status(404).json({ success: false, message: 'Blog post not found' });
    res.json({ success: true, data: updatedPost });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete a blog post
const deleteBlogPost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await BlogPost.findByIdAndDelete(id);
    if (!deletedPost) return res.status(404).json({ success: false, message: 'Blog post not found' });
    res.json({ success: true, message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { createBlogPost, getBlogPosts, updateBlogPost, deleteBlogPost };
