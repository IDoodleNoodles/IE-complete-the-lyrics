const LyricList = ({ allLyrics }) => {
  return (
    <>
      {allLyrics.map((lyric, idx) => (
        <div
          key={idx}
          style={{
            backgroundColor: lyric.color,
            color: 'white',
            borderRadius: 10,
            padding: '10px 20px',
            marginBottom: 10,
            fontWeight: 500,
            fontSize: '1.05rem',
            textAlign: 'left',
            opacity: 0.9,
            width: '100%',                // Stretch horizontally
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
            boxSizing: 'border-box',      // Include padding in width
            display: 'block',             // Ensure block behavior
          }}
        >
          {lyric.text}
        </div>
      ))}
    </>
  );
};

export default LyricList;
