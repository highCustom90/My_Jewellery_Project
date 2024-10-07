
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';


function App() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <div className={`${theme === 'dark' ? "bg-slate-950 text-white" : "bg-white text-black"}`}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}


export default App
