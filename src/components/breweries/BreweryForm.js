import React from 'react';
import TextInput from '../common/TextInput';
import PropTypes from 'prop-types';

const BreweryForm = ({brewery, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Brewery</h1>
      <TextInput
        name="name"
        label="Name"
        value={brewery.name}
        onChange={onChange}
        error={errors.name}/>

      <TextInput
        name="city"
        label="City"
        value={brewery.city}
        onChange={onChange}
        error={errors.city}/>

      <TextInput
        name="phone"
        label="Phone"
        value={brewery.phone}
        onChange={onChange}
        error={errors.phone}/>

      <input
        type="button"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

BreweryForm.propTypes = {
  brewery: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  saving: PropTypes.bool
};

export default BreweryForm;
