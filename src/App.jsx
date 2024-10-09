import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import NavBar from './components/Navbar';
import ContactPage from './Pages/Contact';


function App() {
  return (
    <>
    <NavBar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
    </>
  );
} 
export default App;


