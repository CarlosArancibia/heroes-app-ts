import { Navigate, Route, Routes } from 'react-router-dom';
import { MarvelPage } from '../pages/MarvelPage';
import { DcPage } from '../pages/DcPage';
import { HeroPage } from '../pages/HeroPage';
import { SearchPage } from '../pages/SearchPage';
import { Navbar } from '../components/Navbar';

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="hero/:id" element={<HeroPage />} />
        <Route path="search" element={<SearchPage />} />

        <Route path="/*" element={<Navigate to={'/marvel'} />} />
      </Routes>
    </>
  );
};
