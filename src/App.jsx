import LandingPage from './pages/LandingPage'
import NoPage from './pages/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListingPage from './pages/ListingPage';
import BuyPageOne from './pages/BuyPageOne';

function App() {

  return (
    <BrowserRouter>
      <Routes>

        <Route index element={<LandingPage />} />
        <Route path='/buy' element={<BuyPageOne />} />
        <Route path='/listing' element={<ListingPage />} />

        <Route path="*" element={<NoPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
