// import logo from './logo.svg';
import { FormGroup, Stack, TextInput,RadioButtonGroup, RadioButton, Button } from '@carbon/react';
import ThemeSelector from './ThemeSelector';


function App() {
  return (
    <div className="App">
    <header> <title> Carbon Themeing </title></header>
      <body className="App-header">
      <ThemeSelector/>
    <FormGroup className='form' legendText="Update Form">
    <Stack gap={7}>
      <TextInput id="one" labelText="First Name" />
      <TextInput id="two" labelText="Last Name" />
      <RadioButtonGroup legendText="Gender" name="formgroup-default-radio-button-group" defaultSelected="radio-1">
        <RadioButton labelText="Male" value="radio-1" id="radio-1" />
        <RadioButton labelText="Female" value="radio-2" id="radio-2" />
        <RadioButton labelText="Other" value="radio-3" id="radio-3" />
        <RadioButton labelText="Doesnt want to mention" value="radio-3" id="radio-3" />
      </RadioButtonGroup>
      <Button>Submit</Button>
    </Stack>
  </FormGroup>
      </body>
    </div>
  );
}

export default App;
