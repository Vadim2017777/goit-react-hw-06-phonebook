import React from 'react';
import ThemeContext from '../contex/ThemeContext';

// Эта функция принимает компонент...
const withTheme = WrappedComponent => {
  // ... возвращает другой компонент...
  return function WithTheme(props) {
    // ... который рендерит обернутый в Consumer компонент,
    // передавая тему как проп.
    return (
      <ThemeContext.Consumer>
        {theme => <WrappedComponent {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
  };
};

export default withTheme;
