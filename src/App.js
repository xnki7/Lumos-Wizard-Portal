import './App.css';
// import Navbar from './components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <LandingPage/>
    </div>
  );
}

export default App;


// import React from 'react';
// import CascadeSlider from './components/Navbar/CascadeSlider';

// const App = () => {
//   const slides = [
//     {
//       title: 'Pic 1',
//       imageSrc: './components/Navbar/Logo-01 4.png',
//     },
//     {
//       title: 'Pic 2',
//       imageSrc: '2.jpg',
//     },
//     {
//       title: 'Pic 3',
//       imageSrc: '3.jpg',
//     },
//   ];

//   return (
//     <div>
//       <h1>My Image Carousel</h1>
//       <CascadeSlider slides={slides} />
//     </div>
//   );
// };

// export default App;
