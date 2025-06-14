import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FeaturesPages from "./components/FeaturesPage";
import GuidePages from "./components/GuidesPage";
import GalleryPages from "./components/GalleryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPages />} />
        <Route path="/guide" element={<GuidePages />} />
        <Route path="/gallery" element={<GalleryPages />} />
      </Routes>
    </Router>
  )
}

export default App