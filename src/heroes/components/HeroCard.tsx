import { Link } from 'react-router-dom';

interface Props {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
}

export const HeroCard = ({ id, superhero, alter_ego, first_appearance }: Props) => {
  return (
    <article className="border flex h-48 rounded-md">
      <img className="w-auto h-full" src={`./src/assets/heroes/${id}.jpg`} alt={superhero} />
      <div className="flex flex-col justify-between p-4">
        <h3 className="font-semibold text-xl">{superhero}</h3>
        <p>{alter_ego}</p>
        <p className="text-gray-400 text-sm">{first_appearance}</p>
        <Link className="underline" to={`/hero/${id}`}>
          See more...
        </Link>
      </div>
    </article>
  );
};
