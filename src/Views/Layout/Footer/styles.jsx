import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: ${(props) => props.isProduct === true ? "120px" : "0px"};
    border: 1px solid black;

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