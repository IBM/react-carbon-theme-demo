import { FormGroup, Stack, TextInput, RadioButtonGroup, RadioButton, Button } from '@carbon/react';
import ThemeSelector from './ThemeSelector'; // Assuming ThemeSelector is a valid component
import { useEffect, useState } from 'react';
import { GlobalTheme } from '@carbon/react';

function App() {
  const [selectedTheme, setSelectedTheme] = useState('white'); // Use `selectedTheme` for better clarity

  const handleChange = (themeValue) => { // Update function name and parameter
    setSelectedTheme(themeValue);
    console.log('Theme changed:', themeValue);
  };

  useEffect(() => {
    console.log('Updating theme');
    document.documentElement.setAttribute('data-carbon-theme', selectedTheme);
  }, [selectedTheme]); // Only update on theme change

  return (
  
<GlobalTheme theme={selectedTheme}>
        <div className="App">
        <ThemeSelector handleSelectionChange={handleChange} />
          <header>
            <title>Carbon Theming</title>
          </header>
          <body className="App-header">
            <FormGroup className="form" legendText="Update Form">
              <Stack gap={7}>
                <TextInput id="one" labelText="First Name" />
                <TextInput id="two" labelText="Last Name" />
                <RadioButtonGroup
                  legendText="Gender"
                  name="formgroup-default-radio-button-group"
                  defaultSelected="radio-1"
                >
                  <RadioButton labelText="Male" value="radio-1" id="radio-1" />
                  <RadioButton labelText="Female" value="radio-2" id="radio-2" />
                  <RadioButton labelText="Other" value="radio-3" id="radio-3" />
                  <RadioButton
                    labelText="Doesn't Want to Mention"
                    value="radio-4" // Assign a unique value
                    id="radio-4"
                  />
                </RadioButtonGroup>
                <Button>Submit</Button>
              </Stack>
            </FormGroup>
          </body>
        </div>
        </GlobalTheme>  );
}

export default App;