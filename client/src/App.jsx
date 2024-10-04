
import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';
import Login from './pages/Login';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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

// Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);
// const ScrollAnimation = () => {
//   const sectionsRef = useRef([]);

//   useEffect(() => {
//     sectionsRef.current.forEach((section, index) => {
//       gsap.fromTo(
//         section,
//         {
//           opacity: 0,
//           y: 100,           // Start off-screen from below
//           rotation: 10,     // Slight rotation for a "sexy" effect
//           scale: 0.8,       // Start with a smaller size
//         },
//         {
//           opacity: 1,
//           y: 0,
//           rotation: 0,
//           scale: 1,         // Full size on scroll
//           duration: 1.5,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: section,
//             start: 'top 75%', // When the top of the section reaches 75% of the viewport
//             toggleActions: 'play none none reverse', // Play when scrolled into view, reverse when scrolled out
//           },
//         }
//       );
//     });
//   }, []);

//   return (
//     <div style={styles.pageContainer}>
//       {[...Array(5)].map((_, index) => (
//         <section
//           key={index}
//           ref={el => sectionsRef.current[index] = el}
//           style={{ ...styles.section, background: index % 2 === 0 ? '#e74c3c' : '#3498db' }}
//         >
//           <h1>Section {index + 1}</h1>
//         </section>
//       ))}
//     </div>
//   );
// };

// Styling
// const styles = {
//   pageContainer: {
//     width: '100%',
//     height: '100%',
//     overflowX: 'hidden',
//   },
//   section: {
//     height: '100vh', // Full-screen height for each section
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     fontSize: '3rem',
//     color: 'white',
//     fontWeight: 'bold',
//   }
// };


export default App
