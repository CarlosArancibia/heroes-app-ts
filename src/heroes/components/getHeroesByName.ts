import { heroes } from '../data/heroes';

export const getHeroesByName = (name: string) => {
  name = name.toLowerCase().trim();

  if (name.length <= 1) return [];

  return heroes.filter(({ superhero }) => superhero.toLowerCase().includes(name));
};
