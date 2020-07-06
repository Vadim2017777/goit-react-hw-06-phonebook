import React, { Component } from 'react';

import ThemeContext from '../contex/ThemeContext';
export default class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <header
            style={{
              background: theme.config.headerBg,
              color: theme.config.fontColor,
            }}
          >
            <div className="theme-selector">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={theme.type === 'light'}
                  onChange={event =>
                    this.props.toggleTheme(event.currentTarget.value)
                  }
                />
                <span className="slider round"></span>
              </label>
            </div>
          </header>
        )}
      </ThemeContext.Consumer>
    );
  }
}
