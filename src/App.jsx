
import { useEffect, useState } from 'react';
import './App.css'
import AgeCalculator from './AgeCalculator';
import Loader from './Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 2 seconds
    }, 2000);

    // Clean up the timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Loader/>: <AgeCalculator/>}
    </>
  )
}

export default App
