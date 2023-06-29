// Импортируем модуль axios для работы с HTTP-запросами
import axios from 'axios';

// Устанавливаем базовый URL для всех запросов
axios.defaults.baseURL = 'https://pixabay.com/api/';

// Константа с API-ключом
const API_KEY = '35794671-989ac978d0f5c3155771be810';

// Константа, определяющая количество изображений на странице
export const perPage = 12;

// Функция для получения изображений из API Pixabay
export const getImages = async (query, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`
  );
  return response.data;
};

// Функция для нормализации массива изображений
export const normalizedImages = imagesArray =>
  imagesArray.map(({ id, tags, webformatURL, largeImageURL }) => {
    return { id, tags, webformatURL, largeImageURL };
  });
