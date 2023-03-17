import { Checkbox } from '@mui/material';


const CheckBox = ({ color, checkedFactor }) => {
    return (
        <Checkbox 
            size='extraSmall'
            sx={{
                color: color,
                '&.Mui-checked': {
                  color: color,
                },
            }}
            checked={checkedFactor.completed ? true : false}
        />
    )
}


export default CheckBox;