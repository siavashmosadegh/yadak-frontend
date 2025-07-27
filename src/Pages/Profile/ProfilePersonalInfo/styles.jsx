import styled from 'styled-components';

export const ProfilePersonalInfoWrapper = styled.div`
    .row {
        display: flex;
        justify-content: space-evenly;
    }
`;

export const PersonalInfoItem = styled.div`
    width: 400px;
    height: 100px;
    border: 1px solid gray;
    border-radius: 10px;
    text-align: center;
`;

export const EditIconWrapper = styled.div`
    svg {
        width: 30px;
        height: 30px;
    }
`;

export const IconAndContentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 50px;
`;

export const ParagraphWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
`;