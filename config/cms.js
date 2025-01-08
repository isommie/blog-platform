const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const CMS_API_BASE_URL = process.env.CMS_API_BASE_URL;
const CMS_API_TOKEN = process.env.CMS_API_TOKEN;

const cmsClient = axios.create({
  baseURL: CMS_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${CMS_API_TOKEN}`,
  },
});

module.exports = cmsClient;
