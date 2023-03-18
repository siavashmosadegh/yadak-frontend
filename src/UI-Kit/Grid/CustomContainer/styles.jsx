import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
    display: ${(props) => props.display};
    flex-direction: ${(props) => props.flexDirection};
    align-items: ${(props) => props.alignItems};
    justify-content: ${(props) => props.justifyContent};

    ${props => props.disableMediaQuery === false && css`
        @media (max-width: ${props => props.responsiveMaxWidth}) {
            flex-direction: ${(props) => props.responsiveFlexDirection};
        }
    `};
`;