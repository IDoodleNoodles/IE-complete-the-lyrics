const LiveLyricPreview = ({ text, color }) => {
  if (!text) return null;

  return (
    <div
      style={{
        backgroundColor: color,
        color: 'white',
        borderRadius: 10,
        padding: '10px 20px',
        marginBottom: 10,
        fontWeight: 500,
        fontSize: '1.05rem',
        textAlign: 'left',
        opacity: 0.7,
        fontStyle: 'italic',
        width: '100%',                // Stretch horizontally
        whiteSpace: 'pre-wrap',
        wordBreak: 'break-word',
        boxSizing: 'border-box',      // Include padding in width
        display: 'block',             // Ensure block behavior
      }}
    >
      {text}
    </div>
  );
};

export default LiveLyricPreview;
