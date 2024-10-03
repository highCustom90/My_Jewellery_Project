
import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AllRoutes from './routes/AllRoutes';
import Login from './pages/Login';

function App() {
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <div className={`${theme === 'dark' ? "bg-slate-950 text-white" : "bg-white text-black"}`}>
      <Navbar />
      <AllRoutes />
      <Footer />
      {/* <Login /> */}
    </div>
  )
}



// hand filter
// function HandFilter() {
//   const [skinTone, setSkinTone] = useState(50); // Default value of the slider

//   // Update skin tone based on the slider value
//   const handleChange = (event) => {
//     setSkinTone(event.target.value);
//   };

//   return (
//     <div className="app-container">
//       <div className="hand-container">
//         <img
//           src="src\assets\images\hand.png"
//           alt="Hand with Ring"
//           className="hand-image"
//           style={{
//             filter: `brightness(${skinTone}%)`
//           }}
//         />
//       </div>

//       <div className="slider-container">
//         <input
//           type="range"
//           min="30" // Minimum brightness value for darker tone
//           max="100" // Maximum brightness value for lighter tone
//           value={skinTone}
//           onChange={handleChange}
//           className="slider"
//         />
//         <p>Adjust Hand Skin Tone</p>
//       </div>
//     </div>
//   );
// }

// Sample product images for different colors
// const productImages = {
//   red: 'https://image.brilliantearth.com/media/diamond_ring_vto/TD/BE1D3939_yellow_Round_top_50_carat.png',
//   blue: 'https://image.brilliantearth.com/media/diamond_ring_vto/C7/BE1D3939_rose_Round_top_2_carat.png',
//   green: 'https://image.brilliantearth.com/media/diamond_ring_vto/3P/BE1D3939_white_Round_top_2_carat.png',
// };

// const ProductViewer = () => {
//   const [selectedColor, setSelectedColor] = useState('red'); // Default color

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   return (
//     <div className="product-viewer">
//       <h1>Product Name</h1>

//       {/* Product Image */}
//       <img
//         src={productImages[selectedColor]}
//         alt={`Product in ${selectedColor}`}
//         className="product-image"
//       />

//       {/* Color Selection */}
//       <div className="color-options">
//         {Object.keys(productImages).map((color) => (
//           <button
//             key={color}
//             onClick={() => handleColorChange(color)}
//             style={{
//               backgroundColor: color,
//               border: selectedColor === color ? '2px solid black' : 'none',
//             }}
//             className="color-button"
//           >
//             {color.charAt(0).toUpperCase() + color.slice(1)}
//           </button>
//         ))}
//       </div>

//       <style jsx>{`
//         .product-image {
//           width: 300px; /* Adjust as needed */
//           height: auto;
//         }
//         .color-options {
//           margin-top: 20px;
//         }
//         .color-button {
//           margin-right: 10px;
//           padding: 10px;
//           border: none;
//           cursor: pointer;
//           color: white;
//         }
//       `}</style>
//     </div>
//   );
// };



export default App
