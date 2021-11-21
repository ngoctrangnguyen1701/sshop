import React, { createContext,  useReducer } from 'react';


const greenTheme = {
  backgroundColorContent: 'rgb(232, 248, 231)',
  backgroundColor: '#C8FACD',
  color: '#005249'
}

const blueTheme = {
  backgroundColorContent: 'rgb(232, 248, 255)',
  backgroundColor: '#D0F2FF',
  color: '#04297A'
}


export const ColorThemeContext = createContext(greenTheme)

const colorThemeReducer = (state, action) => {
  switch(action.type){
    case 'GREEN_THEME':
      return {...greenTheme}
    case 'BLUE_THEME':
      return {...blueTheme}
    default:
      return state
  }
}

export const ColorThemeProvider = ({children}) => {  
  const [colorTheme, setColorTheme] = useReducer(colorThemeReducer, greenTheme)

  return (
    <ColorThemeContext.Provider value={{colorTheme, setColorTheme}}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export default ColorThemeProvider;