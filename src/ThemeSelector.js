import { Dropdown } from '@carbon/react';
import { white, g90 } from '@carbon/themes';
import { useState } from 'react';
import PropTypes from 'prop-types';

const availableThemes = [
  { label: 'White', value: 'white' },
  { label: 'G10', value: 'g10' },
  { label: 'G90', value: 'g90' },
  { label: 'G100', value: 'g100' },
];

const ThemeSelector = ({ handleSelectionChange }) => {
  const [selectedTheme, setSelectedTheme] = useState(availableThemes[0]);

  const handleThemeChange = ({ selectedItem }) => {
    setSelectedTheme(selectedItem);
    handleSelectionChange(selectedItem.value);
  };

  return (
    <Dropdown
      id="theme-dropdown"
      label="Theme"
      titleText="Theme"
      selectedItem={selectedTheme}
      items={availableThemes}
      onChange={handleThemeChange}
      itemToString={(item) => (item ? item.label : '')}
      style={{ width: '385px', margin: '10px 0 20px 15px'}} 
    />
  );
};

ThemeSelector.propTypes = {
  handleSelectionChange: PropTypes.func.isRequired,
};

export default ThemeSelector;