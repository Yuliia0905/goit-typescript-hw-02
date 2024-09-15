import Axios from 'axios';

const API_KEY = 'uYj7lZWfuQs73UybVrjxol3O2cOvetuJOpnRAbdlMwg';
const BASE_URL = 'https://api.unsplash.com';

const axios = Axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
  },
});

export const fetchImagesByQuery = async (query, page) => {
  const { data } = await axios.get('/search/photos', {
    params: {
      query,
      page,
      per_page: 12,
    },
  });

  return data;
};
