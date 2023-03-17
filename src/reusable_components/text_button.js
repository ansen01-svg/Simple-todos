import { Button } from "@mui/material";


const TextButton = ({ color, title, icon, handleClick }) => {
    return  <Button 
                variant="text"
                size="small"
                sx={{ color: color, padding: '5px 20px' }}
                startIcon={icon}
                onClick={handleClick}
            >
                { title }
            </Button>
}


export default TextButton;