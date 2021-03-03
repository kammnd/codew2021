import React from "react";
import LanguageContext from './LanguageContext';

class LanguageProvider extends React.Component {
    state = {
      language: "english"
    };
  
    updateLanguage = e => this.setState({ language: e.target.value });
  
    render() {
      return (
        <LanguageContext.Provider
          value={{
            language: this.state.language,
            updateLanguage: this.updateLanguage
          }}
        >
          {this.props.children}
        </LanguageContext.Provider>
      );
    }
}

export default LanguageProvider;