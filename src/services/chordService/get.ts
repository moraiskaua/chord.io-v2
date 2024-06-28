import axios from 'axios';

export const get = async (difficulty: string) => {
  const { data } = await axios.get(`/daily-chord?difficulty=${difficulty}`);

  return data;
};
