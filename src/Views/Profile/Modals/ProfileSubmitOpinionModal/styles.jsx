import styled from 'styled-components';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer/index';

export const Wrapper = styled(CustomContainer)`

`;

export const RatingWrapper = styled(CustomContainer)`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 70%;
    padding-bottom: 20px;
    margin-bottom: 10px;
    h2 {
        text-align: center;
    }
`;

export const SuggestionWrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 70%;
    padding-bottom: 10px;
    p {
        text-align: right;
    }
`;

export const DislikeCustomContainer = styled(CustomContainer)`
    border: 1px solid ${(props) => props.activeIcon === 'dislike' ? 'blue' : 'rgba(0,0,0,0.1)'};
    border-radius: 10px;
    padding: 10px;

    p {
        color: ${(props) => props.activeIcon === 'dislike' ? 'blue' : 'black'};
        margin: 0;
        padding: 0;
    }
`;

export const QuestionCustomContainer = styled(CustomContainer)`
    border: 1px solid ${(props) => props.activeIcon === 'question' ? 'blue' : 'rgba(0,0,0,0.1)'};
    border-radius: 10px;
    padding: 10px;

    p {
        color: ${(props) => props.activeIcon === 'question' ? 'blue' : 'black'};
        margin: 0;
        padding: 0;
    }    
`;

export const LikeCustomContainer = styled(CustomContainer)`
    border: 1px solid ${(props) => props.activeIcon === 'like' ? 'blue' : 'rgba(0,0,0,0.1)'};
    border-radius: 10px;
    padding: 10px;

    p {
        color: ${(props) => props.activeIcon === 'like' ? 'blue' : 'black'};
        margin: 0;
        padding: 0;
    }
`;

export const DislikeIconContainer = styled.div`
    width: auto;
    display: flex;
    svg {
        width: 30px;
        height: 30px;
        path {
            stroke: ${(props) => props.activeIcon === 'dislike' ? 'blue' : "#000000"};
        }
    }
`;

export const LikeIconContainer = styled.div`
    width: auto;
    display: flex;
    svg {
        width: 30px;
        height: 30px;
        path {
            stroke: ${(props) => props.activeIcon === 'like' ? 'blue' : "#000000"};
        }
    }
`;

export const QuestionIconContainer = styled.div`
    width: auto;
    display: flex;
    svg {
        width: 30px;
        height: 30px;
        path {
            stroke: ${(props) => props.activeIcon === 'question' ? 'blue' : "#000000"};
        }
    }
`;