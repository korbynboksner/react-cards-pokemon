import { useState } from 'react';
import axios from 'axios';

export function useFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return [isFlipped, toggleFlip];
}

export function useAxios(baseUrl) {
    const [data, setData] = useState([]);
  
    const fetchData = async (endpoint) => {
      try {
        const response = await axios.get(`${baseUrl}${endpoint}`);
        setData((prevData) => [...prevData, { ...response.data, id: response.data.id || uuid() }]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    return [data, fetchData];
  }