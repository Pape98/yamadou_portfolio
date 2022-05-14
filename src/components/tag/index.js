const Tag = ({ children, color }) => {
  const style = {
    'background': color,
    'color': 'white',
    'padding': '5px 10px',
    'border-radius': '5px',
    'font-size': '0.8em',
  };
  return (
    <div className='tag' style={style}>
      {children}
    </div>
  );
};

export default Tag;
