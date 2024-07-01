import { FormGroup, Stack, TextInput, RadioButtonGroup, RadioButton, Button } from '@carbon/react';
import ThemeSelector from './ThemeSelector';
import { useEffect, useState } from 'react';
import { GlobalTheme } from '@carbon/react';
import CustomComponent from './CustomComponent/CustomComponent';
import Modal from './CustomComponent/Modal'; 

function App() {
  const [selectedTheme, setSelectedTheme] = useState('white');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('radio-1');
  const [modalOpen, setModalOpen] = useState(false); 
  const [modalContent, setModalContent] = useState("");

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
        <ThemeSelector handleSelectionChange={handleChange} />
        <header>
          <title>Carbon Theming</title>
        </header>
        <body className="App-header">
          <FormGroup className="form">
          <h6>Update Form</h6>
          <br/>
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
              <div style={{ display: 'flex', alignItems: 'center'}}>
                <Button onClick={handleClick} style={{ marginRight: '10px' }}>Submit</Button>
                <CustomComponent onClick={handleClick}>Create Alert (Non-carbon component)</CustomComponent>
              </div>
              <Modal isOpen={modalOpen} onClose={closeModal} content={modalContent} />
            </Stack>
          </FormGroup>
        </body>
      </div>
    </GlobalTheme>
  );
}

export default App;
