const Tabs = ({ singersConfig, activeSingerId, setActiveSingerId }) => {
  return (
    <div className="tabs-container">
      {singersConfig.map((singer) => (
        <button
          key={singer.id}
          className={`tab-button ${activeSingerId === singer.id ? 'active' : ''}`}
          style={{ backgroundColor: singer.color }}
          onClick={() => setActiveSingerId(singer.id)}
        >
          {singer.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
