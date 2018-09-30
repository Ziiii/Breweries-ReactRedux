import React from 'react';
import TextInput from '../common/TextInput';

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
        name="City"
        label="City"
        value={brewery.city}
        onChange={onChange}
        error={errors.city}/>

      <TextInput
        name="phone"
        label="phone"
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
  brewery: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  errors: React.PropTypes.object.isRequired,
  saving: React.PropTypes.bool
};

export default BreweryForm;
