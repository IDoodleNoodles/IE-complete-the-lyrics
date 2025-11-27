import './index.css';
import Singer from './components/Singer';
import Tabs from './components/Tabs';
import LyricList from './components/LyricList';
import LiveLyricPreview from './components/LiveLyricPreview';
import { singersConfig } from './config/singersConfig';
import useLyrics from './hooks/useLyrics';

function App() {
  const {
    activeSingerId,
    setActiveSingerId,
    lyricInput,
    allLyrics,
    handleTextChange,
    handleKeyDown,
  } = useLyrics();

  const activeSingerConfig = singersConfig.find(
    (s) => s.id === activeSingerId
  );

  return (
    <div className="app-container">
      <h1>Complete the Lyrics</h1>

      <Tabs
        singersConfig={singersConfig}
        activeSingerId={activeSingerId}
        setActiveSingerId={setActiveSingerId}
      />

      {activeSingerId && activeSingerConfig && (
        <Singer
          text={lyricInput}
          color={activeSingerConfig.color}
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
        />
      )}

      <div className="content-area">
        <LyricList allLyrics={allLyrics} />

        <LiveLyricPreview
          text={lyricInput}
          color={activeSingerConfig?.color}
        />
      </div>
    </div>
  );
}

export default App;
