import React, { useState } from 'react';
import axios from 'axios';

interface SearchResult {
  formatted_address: string;
  geometry: {
    location: {
      lat: number;
      lng: number;
    };
  };
  place_id: string;
}

const AddressSearch: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [results, setResults] = useState<SearchResult[]>([]);

  const handleSearch = async (): Promise<void> => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          query
        )}&key=AIzaSyAmqmsf3pVEVUoGAmwerePWzjUClvYUtwM`
      );
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {results.map((result) => (
          <li key={result.place_id}>
            {result.formatted_address} - Lat: {result.geometry.location.lat}, Long: {result.geometry.location.lng}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddressSearch;
