import styled from 'styled-components';

export const LoaderWrapper = styled.div`
    width: ${(props) => props.height};
    display: ${(props) => props.display};
    height: ${(props) => props.height};
    justify-content: ${(props) => props.justifyContent};
    align-items: ${(props) => props.alignItems};
`;