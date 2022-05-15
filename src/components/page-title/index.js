import './style.scss';

const PageTitle = ({ title }) => {
  return (
    <div id='pageTitle'>
      <div className='title__container'>
        <h1>{title}</h1>
        <div className='title__bar'></div>
      </div>
    </div>
  );
};

export default PageTitle;
