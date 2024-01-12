import { Route, Routes } from 'react-router-dom';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { AuthRoutes } from '../auth/routes/AuthRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login/*" element={<AuthRoutes />} />
      <Route path="/*" element={<HeroesRoutes />} />
    </Routes>
  );
};
