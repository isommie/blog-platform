const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const CMS_API_URL = process.env.CMS_API_URL;

const fetchBlogPosts = async () => {
  try {
    const response = await axios.get(`${CMS_API_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts from CMS:', error);
    throw error;
  }
};

const createBlogPost = async (postData) => {
  try {
    const response = await axios.post(`${CMS_API_URL}/posts`, postData, {
      headers: { Authorization: `Bearer ${process.env.CMS_API_TOKEN}` },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating blog post in CMS:', error);
    throw error;
  }
};

module.exports = { fetchBlogPosts, createBlogPost };
