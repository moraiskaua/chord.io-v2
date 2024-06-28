import { httpClient } from '../httpClient';

export const get = async (difficulty: string) => {
  const { data } = await httpClient.get(`/daily-chord`, {
    params: {
      difficulty,
    },
  });

  return data;
};
