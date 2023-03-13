import styled from "styled-components";

export const LayoutWrapper = styled.div`

    .headerWrapper {
        display: initial;
    }

    .childrenWrapper {
        margin-top: 84.5px;
    }

    .responsiveHeaderWrapper {
        display: none;
    }

    @media (max-width: 1100px) {
        .headerWrapper {
            display: none;
        }

        .responsiveHeaderWrapper {
            display: initial;
        }

        .childrenWrapper {
            margin-top: 0px;
        }
    }
`;