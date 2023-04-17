import styled from 'styled-components';
import CustomContainer from '../../../../UI-Kit/Grid/CustomContainer';

export const FormContainer = styled.div`
    width: 70%;

    @media (max-width: 600px) {
        width: 90%;
    }
`;

export const Form = styled.form`

    p {
        text-align: right;
    }

    .opinionTitleError {
        text-align: right;
        margin: 0;
        padding: 0;
        color: red;
    }

    .opinionTextError {
        text-align: right;
        margin: 0;
        padding: 0;
        color: red;
        margin-bottom: 20px;
    }

    .ratingValueError {
        text-align: right;
        margin: 0;
        padding: 0;
        color: red;
        margin-bottom: 20px;        
    }

    .activeIconError {
        text-align: right;
        margin: 0;
        padding: 0;
        color: red;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    input {
        width: calc(100% - 8px);
        height: 50px;
        margin-bottom: 15px;
    }

    textarea {
        margin-bottom: 10px;
    }
`;

export const RatingWrapper = styled(CustomContainer)`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 100%;
    padding-bottom: 20px;
    margin-bottom: 10px;
    h2 {
        text-align: center;
    }
`;

export const SuggestionWrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 100%;
    padding-bottom: 10px;
    p {
        text-align: right;
    }

    .styledField {
        width: 100%;
        height: 25px;
        margin-bottom: 10px;
    }

    @media (max-width: 600px) {
        p {
            text-align: center;
        }
    }
`;

export const DislikeCustomContainer = styled(CustomContainer)`
    border: 1px solid ${(props) => props.activeIcon === 'dislike' ? 'blue' : 'rgba(0,0,0,0.1)'};
    border-radius: 10px;
    padding: 10px;

    p {
        color: ${(props) => props.activeIcon === 'dislike' ? 'blue' : 'black'};
        margin: 0 0 10px 0;
        padding: 0;
    }
`;

export const QuestionCustomContainer = styled(CustomContainer)`
    border: 1px solid ${(props) => props.activeIcon === 'question' ? 'blue' : 'rgba(0,0,0,0.1)'};
    border-radius: 10px;
    padding: 10px;

    p {
        color: ${(props) => props.activeIcon === 'question' ? 'blue' : 'black'};
        margin: 0 0 10px 0;
        padding: 0;
    }    
`;

export const LikeCustomContainer = styled(CustomContainer)`
    border: 1px solid ${(props) => props.activeIcon === 'like' ? 'blue' : 'rgba(0,0,0,0.1)'};
    border-radius: 10px;
    padding: 10px;

    p {
        color: ${(props) => props.activeIcon === 'like' ? 'blue' : 'black'};
        margin: 0 0 10px 0;
        padding: 0;
    }
`;

export const DislikeIconContainer = styled.div`
    width: auto;
    display: flex;
    margin-bottom: 10px;
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
    margin-bottom: 10px;
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
    margin-bottom: 10px;
    svg {
        width: 30px;
        height: 30px;
        path {
            stroke: ${(props) => props.activeIcon === 'question' ? 'blue' : "#000000"};
        }
    }
`;