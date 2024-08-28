import LandingPage from './pages/LandingPage'
import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingPage from './pages/ListingPage';
import ViewProjectsToBuy from './pages/ViewProjectsToBuy';
import AboutPage from './pages/AboutPage';
import BuyProjectDetails from './pages/BuyProjectDetails';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<LandingPage />} />
        <Route path='/buy' element={<ViewProjectsToBuy />} />
        <Route path='/listing' element={<ListingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/buy-details' element={<BuyProjectDetails />} />

        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
