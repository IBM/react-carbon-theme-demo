import { default as Dropdown } from '@carbon/react';
let items =[{
    id : 'white',
    value:'white'
},
{
    id : 'g10',
    value:'g10'
},
{
    id : 'g90',
    value:'g90'
},
{
    id : 'g100',
    value:'g100'
}
]
let ThemeSelector =()=>{
   return ( <Dropdown id="default" onSelectionChange={(val)=>{}

   } titleText="Theme" helperText="Change your theme" initialSelectedItem={items[1]} label="Option 1" items={items} itemToString={item => item ? item.text : ''} />
)}

export default ThemeSelector;