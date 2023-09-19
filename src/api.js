
import axios from 'axios';

export const API_KEY = '39516513-b2de4558649c1d6b4380e040e';

export const BASE_URL = 'https://pixabay.com/api/';

export const defaultParams = {
  per_page: 12,
  page: 1,
  image_type: 'photo',
  orientation: 'horizontal',
};

export const buildPixabayURL = (searchQuery) => {
  const queryParams = {
    ...defaultParams,
    key: API_KEY,
    q: searchQuery,
  };
  return `${BASE_URL}?${new URLSearchParams(queryParams).toString()}`;
};

export const fetchImages = async (searchQuery) => {
  try {
    const response = await axios.get(buildPixabayURL(searchQuery));
    if (response.status === 200) {
      const data = response.data;
      const formattedImages = data.hits.map((image) => ({
        id: image.id,
        webformatURL: image.webformatURL,
        largeImageURL: image.largeImageURL,
      }));
      return formattedImages;
    }
  } catch (error) {
    console.error('Ошибка при запросе:', error);
    throw error;
  }
};