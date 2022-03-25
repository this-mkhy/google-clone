import React, { createContext, useContext, useState } from 'react';

const ResultContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

// ContextProvider
export const ResultContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('frontend developer');

  // to make complete request
  // urlType => /videos, /search, /images
  const getResults = async (urlType) => {
    setLoading(true);

    const res = await fetch(`${baseUrl}${urlType}`, {
      // option object
      method: 'GET',
      headers: {
        'X-User-Agent': 'desktop',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': '1169651f57msh618d75a65128dfap1767bbjsnd606012fe114'
      },
    });

    const data = await res.json();
    //console.log(data);

    //console.log({urlType, data});
    if(urlType.includes('/news')){
      setResults(data.entries)
    } else if(urlType.includes('/images')){
      setResults(data.image_results)
    } else{
      setResults(data.results)
    }

    //setResults(data);
    setLoading(false);
  };

  // send states and function through the context to anywhere in the react app
  return (
    <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </ResultContext.Provider>
  );
};

// this function to make it easy use the values from the context
export const useResultContext = () => useContext(ResultContext);