import { Button } from "@mui/material";
import { memo } from 'react';


const AddButton = memo((props) => {

    const { width, height, color, title } = props;

    return  <Button 
                variant="contained"
                sx={{ width: width, height: height, color: color }}
                type='submit'
            >
                { title }
            </Button>
})


export default AddButton;