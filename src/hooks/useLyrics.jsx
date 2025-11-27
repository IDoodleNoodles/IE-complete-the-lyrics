import { useState } from 'react';
import { singersConfig } from '../config/singersConfig';

const useLyrics = () => {
  const [activeSingerId, setActiveSingerId] = useState(null);
  const [lyricInput, setLyricInput] = useState('');
  const [allLyrics, setAllLyrics] = useState([]);

  const handleTextChange = (newText) => {
    setLyricInput(newText);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && lyricInput.trim() !== '' && activeSingerId) {
      const singerConfig = singersConfig.find(
        (s) => s.id === activeSingerId
      );

      setAllLyrics((prev) => [
        ...prev,
        {
          singerId: activeSingerId,
          text: lyricInput,
          color: singerConfig.color,
        },
      ]);

      setLyricInput('');
      e.preventDefault();
    }
  };

  return {
    activeSingerId,
    setActiveSingerId,
    lyricInput,
    allLyrics,
    handleTextChange,
    handleKeyDown,
  };
};

export default useLyrics;
