import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 400px;
    height: 400px;
    background-color: white;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 15px;

    .header {
        height: 50px;
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

    p {
        text-align: right;
    }

    .pasokh {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .law {
        text-align: center;
    }

    @media (max-width: 1100px) {
        width: 100%;
        height: 100%;
        border-radius: 0px;
    }
`;