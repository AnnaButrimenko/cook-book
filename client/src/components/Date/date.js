import React from 'react';

const Date = ({ date }) => {
  const dateForm = date.split('-').join('/').slice(0, 10);
  return (
    <>
      <span>{dateForm}</span>
    </>
  )
};

export default Date;
