import './style.scss';

const Tag = ({ children, color }) => {
  const style = {
    background: color,
  };
  return (
    <div className='tag' style={style}>
      {children}
    </div>
  );
};

export default Tag;
