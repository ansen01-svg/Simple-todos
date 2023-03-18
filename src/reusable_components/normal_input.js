import { InputWrapper } from '../styled_components';


const Input = (props) => {

    const { type, value, placeholder, textDecoration, textColor, handleChange, disabled } = props;

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