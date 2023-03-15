import { TextField } from '@mui/material';


const TodosInput = () => {
    return  <TextField 
               id="outlined-basic" 
               label='Add a task. e.g - Walk my dog'
               variant="outlined" 
               helperText=''
               sx={{ width: '85%', input: { color: 'white' } }}
            />
}


export default TodosInput;