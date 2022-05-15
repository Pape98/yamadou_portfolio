import React from 'react';

const SenegalFlag = () => {
  const styles = {
    display: 'inline-block',
    height: '15px',
    marginLeft: '6px',
  };
  return (
    <>
      <img
        style={styles}
        className='senegalFlag'
        alt='senegal flag'
        src='/assets/images/senegal.jpeg'
      />
    </>
  );
};

export default SenegalFlag;
