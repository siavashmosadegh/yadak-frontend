import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 60%;
    border-top: 1px solid gray;

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

export const QuestionOpitionStar = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    .star {
        width: 35px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        font-size: 14px;
        color: black;
    }

    .opinionAndQuestion {
        width: 55px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row-reverse;
        font-size: 14px;
        color: blue;
    }
`;

export const UserSuggest = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    svg {
        margin-left: 5px;
    }

    p {
        margin-left: 5px;
    }
`;

export const Features = styled.div`
    h3 {
        text-align: right;
    }

    .featureItem {
        display: flex;
        flex-direction: row-reverse;
        align-items: center;

        svg {
            margin-left: 2px;
        }
        
        p {
            margin-left: 5px;
        }
    }
`;