import { heroes } from '../data/heroes';

export const getHeroesByName = (name: string) => {
  name = name.toLowerCase().trim();

  return heroes.filter(({ superhero }) => superhero.toLowerCase().includes(name));
};
