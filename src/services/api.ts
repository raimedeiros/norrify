import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes',
});

export type Categories = {
  categories: string[];
};

export type JokeResponse = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
};
class NorrisService {
  static getCategories = async () => {
    const categories = await api.get('categories');
    return categories.data;
  };

  static getJoke = async (categoryName?: string) => {
    const joke = await api.get<JokeResponse>(`random?category=${categoryName}`);
    return joke.data;
  };
}

export default NorrisService;
