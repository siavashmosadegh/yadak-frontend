import { LoaderWrapper } from './styles';
import { CircularProgress } from '@mui/material';

const Loader = (props) => {

    return (
        <LoaderWrapper
            width={props.width}
            display={props.display}
            height={props.height}
            justifyContent={props.justifyContent}
            alignItems={props.alignItems}
        >
            <CircularProgress size={props.componentSize}/>
        </LoaderWrapper>
    );
}

Loader.defaultProps = {
    width: "100%",
    display: "flex",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    componentSize: "80px"
};

export default Loader;