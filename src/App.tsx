import ROUTES from '@constants/ROUTES';
import MainPage from '@pages/main';
import ScrapPage from '@pages/scrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import './global.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>
      <ToastContainer
        transition={Slide}
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.MAIN} element={<MainPage />} />
          <Route path={ROUTES.SCRAP} element={<ScrapPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
