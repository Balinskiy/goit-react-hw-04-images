import axios from 'axios';

const API_KEY = '40315743-946dc4202327f4239c0c67201';
axios.defaults.baseURL = 'https://pixabay.com';
axios.defaults.params = {
  key: API_KEY,
  orientation: 'horizontal',
  per_page: 12,
  image_type: 'photo',
};

export const getImages = async (query, page) => {
  try {
    const { data } = await axios.get(`/api/?q=${query}&page=${page}`);

    console.log(data);

    return data;
  } catch (error) {
    console.error(error.message);
  }
};
