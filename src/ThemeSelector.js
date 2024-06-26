import { Dropdown } from '@carbon/react';
import {  white,
    g10,
    g90,
    g100, } from '@carbon/themes';
import { useState } from 'react';
import PropTypes from 'prop-types';

const availableThemes = [
  { label: 'White', value: white },
  { label: 'G90', value: g90 },
];

const ThemeSelector = ({ handleSelectionChange,
  selectedItem
 }) => {
  const [selectedTheme, setSelectedTheme] = useState(availableThemes[0].value); // Default to first theme

  const handleThemeChange = (selectedItem) => {
    setSelectedTheme(selectedItem.value);
    handleSelectionChange(selectedItem.value); // Pass the theme value to the parent
    console.log(selectedItem.label);
  };

  return (
    <Dropdown
      id="theme-dropdown"
      label="Theme"
      titleText='Theme'
      selectedItem={selectedTheme}
      items={availableThemes}
      onChange={handleThemeChange}
      itemToString={(item) => item.label}
    />
  );
};

ThemeSelector.propTypes = {
  handleSelectionChange: PropTypes.func.isRequired,
};

export default ThemeSelector;