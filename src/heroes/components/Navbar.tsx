import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate('/login', { replace: true });
  };

  return (
    <header className="bg-slate-200">
      <div className="max-w-[1400px] mx-auto px-10 text-black bg-slate-200 h-14 grid grid-cols-12 items-center">
        <h1 className="col-span-2 text-2xl font-semibold">HeroesApp</h1>
        <nav className="col-span-8 flex gap-3">
          <NavLink className={({ isActive }) => (isActive ? 'line-through' : '')} to={'/marvel'}>
            Marvel
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'line-through' : '')} to={'/dc'}>
            DC
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'line-through' : '')} to={'/search'}>
            Search
          </NavLink>
        </nav>
        <span className="col-span-1 text-gray-600">Usuario</span>
        <button className="col-span-1 border border-black rounded-md py-1" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};
