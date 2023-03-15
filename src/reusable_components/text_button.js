import { Button } from "@mui/material";


const TextButton = ({ width, height, color, title }) => {
    return  <Button 
                variant="text"
                sx={{ width: width, height: height, color: color }}
            >
                { title }
            </Button>
}


export default TextButton;