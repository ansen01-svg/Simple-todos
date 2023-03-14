import { Typography } from '@mui/material';


const TypoGraphy = ({ variant, title }) => {
    return (
        <Typography variant={variant}>
            { title }
        </Typography>
    )
}


export default TypoGraphy;