import { Typography } from '@mui/material';


const TypoGraphy = ({ variant, title, textColor }) => {
    return (
        <Typography variant={variant} sx={{color: textColor}}>
            { title }
        </Typography>
    )
}


export default TypoGraphy;