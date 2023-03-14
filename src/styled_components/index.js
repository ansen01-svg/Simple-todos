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
    padding: ${props => props.padding || 'auto'};
    border-bottom: ${props => props.borderBottom || 'none'};
`