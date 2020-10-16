import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
});

instance.interceptors.request.use((config) => {
  config.params = {
    client_id: '-oTgeyPWKtt7ze7zQLfeYh0kYTuRyub0Le5-kfqgdZc',
    ...config.params,
  };
  return config;
});

export const fetchGallery = async () => {
  const {data} = await instance.get('/photos');
  return data;
};

export const fetchSinglePhoto = async (photoId) => {
  const {data} = await instance.get(`/photos/${photoId}`);
  return data;
};
