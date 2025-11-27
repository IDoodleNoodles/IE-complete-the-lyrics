const Singer = ({ text, color, onChange, onKeyDown }) => {
  return (
    <div className="singer-container">
      <textarea
        className="lyric-input"
        placeholder="Type lyrics here..."
        value={text}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={onKeyDown}
        rows={1}
        style={{resize: 'vertical'}}
      />
    </div>
  );
};

export default Singer;