import styled from "styled-components";


export const MainWrapper = styled.div`
    width: ${props => props.width || '100%'};
    height: ${props => props.height || '100%'};
    background: ${props => props.backgroundColor || 'none'};
`

export const Wrapper = styled(MainWrapper)`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    gap: ${props => props.gap || '0'};
    padding: ${props => props.padding || '0 0'};
    border-bottom: ${props => props.borderBottom || 'none'};
`

export const FlexibleHeightWrapper = styled.div`
    width: ${props => props.width || '100%'};
    background: ${props => props.backgroundColor || 'none'};
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    gap: ${props => props.gap || '0'};
    padding: ${props => props.padding || '0 0'};
    border-bottom: ${props => props.borderBottom || 'none'};
`

export const Form = styled.form`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${props => props.flexDirection || 'row'};
    align-items: ${props => props.alignItems || 'center'};
    justify-content: ${props => props.justifyContent || 'center'};
    gap: ${props => props.gap || '20px'};
    padding: ${props => props.padding || '0 0'};
`

export const InputWrapper = styled.input`
    width: ${props => props.width};
    height: ${props => props.height};
    outline: none;
    border: ${props => props.border || 'none'};
    color: ${props => props.textColor || 'var(--text_color2)'};
    font-family: system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;
    font-weight: 500;
    // font-size: 0.875rem;
    font-size: 16px;
    text-decoration:${props => props.textDecoration || 'none'};
    background: ${props => props.backgroundColor|| 'none'};
`