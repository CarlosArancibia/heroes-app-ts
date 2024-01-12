import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './HeroCard';

interface Props {
  publisher: string;
}

export const HeroList = ({ publisher }: Props) => {
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="grid grid-cols-3 gap-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
