import ROUTES from '@constants/ROUTES';
import MainPage from '@pages/main';
import ScrapPage from '@pages/scrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.MAIN} element={<MainPage />} />
        <Route path={ROUTES.SCRAP} element={<ScrapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
