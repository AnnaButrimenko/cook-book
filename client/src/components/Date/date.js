import React from 'react';
import PropTypes from 'prop-types';

const Date = ({ date }) => {
  // const dateForm = date
  const dateForm = date.split('-').join('/').slice(0, 10);
  return (
    <>
      <span>{dateForm}</span>
    </>
  )
};

export default Date;

Date.propTypes = {
  date: PropTypes.string.isRequired,
};
