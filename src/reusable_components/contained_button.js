import { Button } from "@mui/material";
import { memo } from 'react';


const AddButton = memo(({ width, height, color, title }) => {
    return  <Button 
                variant="contained"
                sx={{ width: width, height: height, color: color }}
                type='submit'
            >
                { title }
            </Button>
})


export default AddButton;