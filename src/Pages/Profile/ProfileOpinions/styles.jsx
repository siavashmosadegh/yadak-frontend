import styled from "styled-components";
import CustomContainer from "../../../UI-Kit/Grid/CustomContainer";

export const ProfileWrapper = styled.div`
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 10px;
    margin-right: 20px;
`;

export const HeaderContainer = styled(CustomContainer)`
    height: 70px;

    .header {
        margin-right: 10px;
    }
`;

export const TabsContainer = styled(CustomContainer)`
    height: 50px;
`;

export const Line = styled.div`
    width: 100%;
    height: 1px;
    background-color: gray;
`;