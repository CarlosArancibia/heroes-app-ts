import { useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {
  const { id = 'Unknown' } = useParams();
  const navigate = useNavigate();
  const hero = getHeroById(id);

  const onReturn = () => {
    navigate(-1);
  };

  return (
    <article className="max-w-[1400px] h-[90vh] mx-auto p-10 flex gap-24">
      <div className="flex-2 border overflow-hidden rounded-md">
        <img
          className="h-full w-auto hover:scale-110 duration-300"
          src={`../src/assets/heroes/${id}.jpg`}
          alt={hero?.superhero}
        />
      </div>
      <div className="flex-1 text-lg">
        <h3 className="text-5xl font-semibold">{hero?.superhero}</h3>
        <ul className="mt-4">
          <li className="border-b py-2">
            <strong>Alter ego:</strong> {hero?.alter_ego}
          </li>
          <li className="border-b py-2">
            <strong>Publisher:</strong> {hero?.publisher}
          </li>
          <li className="border-b py-2">
            <strong>First appearance:</strong> {hero?.first_appearance}
          </li>
          <li className="py-2">
            <strong>Characters:</strong> {hero?.characters}
          </li>
        </ul>
        <button className="mt-6 bg-white text-black rounded py-2 px-5" onClick={onReturn}>
          Go Back
        </button>
      </div>
    </article>
  );
};
