
<<<<<<< HEAD
=======
import Lenis from '@studio-freight/lenis';
import { useEffect } from 'react';
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';

<<<<<<< HEAD

function App() {
  const { theme } = useSelector((state) => state.themeReducer);

=======
function App() {
  const { theme } = useSelector((state) => state.themeReducer);
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2, // Control scroll duration speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scrolling
    });

    // Scroll animation loop
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy(); // Clean up on unmount
  }, []);
>>>>>>> 4362160a3797a90a29e1ba08c7105a41d4ea7fb3
  return (
    <div className={`${theme === 'dark' ? "bg-slate-950 text-white" : "bg-white text-black"}`}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  )
}


export default App
