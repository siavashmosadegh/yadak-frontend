import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: ${(props) => props.isProduct === true ? "100px" : "0px"};

    .iconsDiv {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        svg {
            margin-left: 10px;
        }
    }

    h3 {
        text-align: right;
    }

    p {
        text-align: right;
    }

    @media (min-width: 1100px) {
        margin-bottom: 0px;
    }
`;