import styled from "styled-components";
import { Grid } from "@mui/material";

export const Wrapper = styled(Grid)`
    width: 250px;
    height: 300px;
    border: 1px solid black;

    p {
        font-size: 12px;
        font-weight: bold;
        margin-left: 3px;
    }

    .imageDiv {
        width: 250px;
        height: 250px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid blue;
    }

    .titleDiv {
        width: 250px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;