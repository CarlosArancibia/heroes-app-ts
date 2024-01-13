import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const onLogin = () => {
    const lastpath = localStorage.getItem('lastpath') ?? '/';
    navigate(lastpath, { replace: true });
    login('Carlos Arancibia');
  };

  return (
    <div className="max-w-[1400px] mx-auto px-10">
      <h2 className="text-5xl my-5">LoginPage</h2>
      <hr />
      <button className="bg-white text-black rounded mt-5 py-2 px-5" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};
