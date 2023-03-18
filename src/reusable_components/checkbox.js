import { Checkbox } from '@mui/material';


const CheckBox = (props) => {

    const { color, checkedFactor, handleChange } = props;

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