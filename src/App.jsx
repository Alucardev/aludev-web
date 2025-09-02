import NavBar from './components/Navbar';
import HomePage from './Pages/Home';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <NavBar/>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HomePage />
      </div>
      <Footer />
    </LanguageProvider>
  );
}

export default App;


