import { InputWrapper } from '../styled_components';


const Input = (...props) => {

    const { placeholder, type, value, handleChange } = props;

    return  <InputWrapper
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={e => handleChange(e)}
            />
}


export default Input;