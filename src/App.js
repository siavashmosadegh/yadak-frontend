import './App.css';
import { useSelector } from 'react-redux';
import Routes from './Routes/index';
import { ChakraProvider } from '@chakra-ui/react';

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 900,
//       lg: 1024,
//       xl: 1536,
//     },
//   },
// })

function App() {

  const state = useSelector((state) => state.General.counter);

  return (
      <>
        <Routes />
      </>
  );
}

export default App;
