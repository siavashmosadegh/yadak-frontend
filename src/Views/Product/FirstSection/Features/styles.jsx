import styled from "styled-components";

export const FeaturesWrapper = styled.div`

    width: 100%;
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