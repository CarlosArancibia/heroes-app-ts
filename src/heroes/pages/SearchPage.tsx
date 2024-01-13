import { useLocation } from 'react-router-dom';
import { FormSearch } from '../components/FormSearch';
import { getHeroesByName } from '../components/getHeroesByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {
  const { pathname, search } = useLocation();
  const q = search.replace('?q=', '');
  const heroes = getHeroesByName(q);

  const showSearch = q.length === 0;
  const showEmpty = q.length > 0 && heroes.length === 0;

  return (
    <section className="max-w-[1400px] mx-auto p-10 flex gap-24">
      <section className="flex-1">
        <h2 className="text-2xl">Search Form</h2>
        <hr className="mt-1 mb-5" />
        <FormSearch />
      </section>
      <section className="flex-1 ">
        <h2 className="text-2xl">Results</h2>
        <hr className="mt-1 mb-5" />
        <div className="flex flex-col gap-3">
          {showSearch && 'Waiting to search'}
          {showEmpty && 'No heroes'}

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </section>
    </section>
  );
};
