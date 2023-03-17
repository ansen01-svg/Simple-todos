import { Checkbox } from '@mui/material';


const CheckBox = ({ color, checkedFactor, handleChange }) => {
    return (
        <Checkbox 
            size='extraSmall'
            sx={{
                color: color,
                '&.Mui-checked': {
                  color: color,
                },
            }}
            onChange={() => handleChange(checkedFactor.id)}
        />
    )
}


export default CheckBox;