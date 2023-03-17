import { TextField } from '@mui/material';


const TodosInput = ({ value, setValue }) => {
    return  <TextField 
               id="outlined-basic" 
               label='Add a task. e.g - Walk my dog'
               variant="outlined" 
               helperText=''
               sx={{ width: '85%', input: { color: 'white' } }}
               value={value}
               onChange={(e) => setValue(e.target.value)}
            />
}


export default TodosInput;