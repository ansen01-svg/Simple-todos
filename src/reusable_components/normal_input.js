import { InputWrapper } from '../styled_components';


const Input = ({ type, value, placeholder, textDecoration, textColor, handleChange, disabled }) => {
    return  <InputWrapper
                width='100%'
                type={type}
                placeholder={placeholder}
                textDecoration={textDecoration}
                textColor={textColor}
                value={value}
                onChange={e => handleChange(e)}
                disabled={disabled}
            />
}


export default Input;