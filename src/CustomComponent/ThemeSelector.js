/******************************************************************
  Copyright 2024 IBM Corp. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
 *********************************************************************/

import { Dropdown } from '@carbon/react';
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
      label="Theme Switcher"
      titleText="Theme Switcher"
      selectedItem={selectedTheme}
      items={availableThemes}
      onChange={handleThemeChange}
      itemToString={(item) => (item ? item.label : '')}
      style={{ width: '385px', marginBottom: '30px'}} 
    />
  );
};

ThemeSelector.propTypes = {
  handleSelectionChange: PropTypes.func.isRequired,
};

export default ThemeSelector;