import React, { useContext } from 'react';

export const AppContext = React.createContext();

export const useCharacters = () => {
  const { state } = useContext(AppContext);
  return state.characterList;
}

export const usePage = () => {
  const { state } = useContext(AppContext);
  return state.page;
}

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
}

export const useTheme = () => {
  const { theme } = useContext(AppContext);
  return theme;
}