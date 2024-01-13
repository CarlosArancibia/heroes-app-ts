import { useContext } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const { user, logout } = useContext(AuthContext);

  const onLogout = () => {
    navigate('/login', { replace: true });
    localStorage.setItem('lastpath', pathname + search);
    logout();
  };

  return (
    <header className="bg-slate-200">
      <div className="max-w-[1400px] mx-auto px-10 text-black bg-slate-200 h-14 grid grid-cols-12 items-center">
        <h1 className="col-span-2 text-2xl font-semibold">HeroesApp</h1>
        <nav className="col-span-7 flex gap-3">
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
        <span className="col-span-2 text-gray-600 justify-self-center">{user?.name}</span>
        <button className="col-span-1 border border-black rounded-md py-1" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
};
