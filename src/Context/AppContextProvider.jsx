import { useColorMode } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();
function AppContextProvider({ children }) {
  const DarkTheme = {
    about: {
     fontColor: 'white',
      backgroundColor: '#254B62',
      buttonColor: 'white',
      buttonBgColor: '#476D7C',
      cardBgColor:"#77ABB7" 
    },
  };
  const LightTheme = {
    about: {
      fontColor: 'black',
      backgroundColor: '#82DBD8',
      buttonColor: 'white',
      buttonBgColor: '#3BACB6',
      cardBgColor:"white"
    },
  };
  const [width, setwidth] = useState(window.innerWidth);
  const { colorMode} = useColorMode();
  const [Theme, setTheme] = useState(
    colorMode === 'light' ? LightTheme : DarkTheme
  );
  useEffect(()=>{
    setTheme(colorMode === 'light' ? LightTheme : DarkTheme)
  },[colorMode])
  window.onresize = function () {
    setwidth(window.innerWidth);
  };
  return (
    <AppContext.Provider value={{ screenSize: width, Theme }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
