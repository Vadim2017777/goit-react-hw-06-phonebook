import React from 'react';
import PropTypes from 'prop-types';

import s from './Filter.module.css';

const Filter = ({ filter, onChange }) => (
  <div className={s.phone_filter}>
    <h3>Find my contacts</h3>
    <input
      type="text"
      value={filter}
      className={s.phone_filterInp}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
