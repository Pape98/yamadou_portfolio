const Tag = ({ children, color }) => {
  const style = {
    background: color,
    color: 'white',
    padding: '5px 10px',
    borderRadius: '5px',
    fontSize: '0.8em',
  };
  return (
    <div className='tag' style={style}>
      {children}
    </div>
  );
};

export default Tag;
