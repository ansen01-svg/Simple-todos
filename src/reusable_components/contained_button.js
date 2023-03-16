import { Button } from "@mui/material";


const AddButton = ({ width, height, color, title }) => {
    return  <Button 
                variant="contained"
                sx={{ width: width, height: height, color: color }}
            >
                { title }
            </Button>
}


export default AddButton;