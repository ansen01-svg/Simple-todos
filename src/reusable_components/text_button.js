import { Button } from "@mui/material";


const TextButton = (props) => {

    const { color, title, icon, handleClick } = props;

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