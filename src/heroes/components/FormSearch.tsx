import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const FormSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const onInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value);
  };

  const onSearchHero = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;

    navigate(`?q=${inputValue}`);
  };

  return (
    <form onSubmit={onSearchHero}>
      <input
        className="w-full rounded-md p-2"
        type="text"
        placeholder="Find your hero..."
        value={inputValue}
        onChange={onInputChange}
      />
      <button className="w-full bg-white text-black rounded mt-3 py-2 px-5">Search</button>
    </form>
  );
};
