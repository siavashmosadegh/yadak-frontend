import styled from 'styled-components';

export const Wrapper = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: ${(props) => props.modalBackgroundColor};
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 15px;

    .header {
        height: ${(props) => props.headerHeight};
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(0,0,0,0.5);
        margin-bottom: 15px;
        svg {
            fill: #000000;
            width: 35px;
            height: 35px;
            padding-left: -5px;
        }
    }

    .content {
        height: calc(100% - ${(props) => props.headerHeight});
    }

    @media (max-width: ${(props) => props.mediaQueryBreakpoint}) {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`;