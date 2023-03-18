import { Typography } from '@mui/material';


const TypoGraphy = (props) => {

    const { variant, title, textColor } = props;

    return (
        <Typography variant={variant} sx={{color: textColor}}>
            { title }
        </Typography>
    )
}


export default TypoGraphy;