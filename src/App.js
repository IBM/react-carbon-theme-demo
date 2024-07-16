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


import { FormGroup, Stack, TextInput, RadioButtonGroup, RadioButton, Button } from '@carbon/react';
import ThemeSelector from './CustomComponent/ThemeSelector';
import { useEffect, useState } from 'react';
import { GlobalTheme } from '@carbon/react';
import CustomComponent from './CustomComponent/CustomComponent';
import Modal from './CustomComponent/Modal';
let currentTheme = 'white';
(window.matchMedia('(prefers-color-scheme: dark)').matches) ? currentTheme = 'g100' : currentTheme = 'white';

function App() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('radio-1');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const [selectedTheme, setSelectedTheme] = useState(currentTheme);

  const handleChange = (theme) => {
    setSelectedTheme(theme);
  };

  const handleClick = () => {
    if (firstName && lastName && gender) {
      const genderTextValue = {
        'radio-1': 'Male',
        'radio-2': 'Female',
        'radio-3': 'Other',
        'radio-4': "Doesn't Want to Mention"
      }[gender];

      const modalContent = `Details Entered:\nFirst Name: ${firstName}\nLast Name: ${lastName}\nGender: ${genderTextValue}`;
      setModalContent(modalContent);
      setModalOpen(true);
    } else {
      const modalContent = `Please enter all details!`;
      setModalContent(modalContent);
      setModalOpen(true);
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-carbon-theme', selectedTheme);
  }, [selectedTheme]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <GlobalTheme theme={selectedTheme}>
      <div className="App">
        <header>
          <title>Carbon Theming</title>
        </header>
        <body className="App-header">
          <FormGroup className="form">
            <ThemeSelector handleSelectionChange={handleChange} />
            <h4>Personal details</h4>
            <br />
            <Stack gap={7}>
              <TextInput
                id="one"
                labelText="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <TextInput
                id="two"
                labelText="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <RadioButtonGroup
                legendText="Gender"
                name="formgroup-default-radio-button-group"
                defaultSelected={gender}
                onChange={(value) => setGender(value)}
              >
                <RadioButton labelText="Male" value="radio-1" id="radio-1" />
                <RadioButton labelText="Female" value="radio-2" id="radio-2" />
                <RadioButton labelText="Other" value="radio-3" id="radio-3" />
                <RadioButton labelText="Doesn't Want to Mention" value="radio-4" id="radio-4" />
              </RadioButtonGroup>
              <Button onClick={handleClick} style={{ marginRight: '10px' }}>Submit</Button>
              <h4>Non Carbon Component</h4>
              <CustomComponent onClick={handleClick}>Show Details</CustomComponent>
              <Modal isOpen={modalOpen} onClose={closeModal} content={modalContent} />
            </Stack>
          </FormGroup>
        </body>
      </div>
    </GlobalTheme>
  );
}

export default App;
