import { HeroList } from '../components/HeroList';

export const DcPage = () => {
  return (
    <div className="max-w-[1400px] mx-auto p-10">
      <h2 className="text-2xl">DC</h2>
      <hr className="mt-1 mb-5" />
      <HeroList publisher="DC Comics" />
    </div>
  );
};
