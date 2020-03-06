import React from 'react';
import PropTypes from 'prop-types';
import useStyles from './_date'

const Date = ({ date }) => {
  const classes = useStyles();
  const dateForm = date.split('-').join('/').slice(0, 10);
  return (
    <>
      <span
        className={classes.date}>
        {dateForm}
      </span>
    </>
  )
};

export default Date;

Date.propTypes = {
  date: PropTypes.string.isRequired,
};
