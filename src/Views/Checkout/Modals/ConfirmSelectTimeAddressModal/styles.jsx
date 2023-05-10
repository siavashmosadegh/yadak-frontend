import styled from 'styled-components';

export const Wrapper = styled.div`
    .title {
        text-align: right;
    }

    p {
        padding: 0;
        margin: 0;
    }

    .time {
        margin-top: 15px;
        margin-bottom: 15px;

        span {
            margin-left: 5px;
        }
    }

    .location {
        margin-bottom: 15px;
        p {
            text-align: right;
        }
    }

    a {
        width: 30%;
        height: 50px;
        text-decoration: none;
    }
`;