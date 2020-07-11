import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <div className={styles.phone_filter}>
    <h3>Find my contacts</h3>
    <input
      type="text"
      value={filter}
      className={styles.phone_filterInp}
      onChange={onChange}
    />
  </div>
);

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
