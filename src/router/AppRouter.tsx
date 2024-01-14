import { Navigate, Route, Routes } from 'react-router-dom';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';

export const AppRouter = () => {
  const { logged } = useContext(AuthContext);

  return (
    <Routes>
      {logged ? (
        <Route path="/*" element={<HeroesRoutes />} />
      ) : (
        <Route path="login/*" element={<AuthRoutes />} />
      )}

      <Route path="/*" element={<Navigate to={'login'} />} />
    </Routes>
  );
};
