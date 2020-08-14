import React from 'react';
import TextInput from './TextInput';

class TranslateButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }
  onClickHandler(event) {
    const vowels = /[aeiou]+/g;
    console.log(this.props.translation.toLowerCase().replace(vowels, 'i'));
    return TextInput.result.replace(vowels, 'i');
  }

  render() {
    return (
      <button onClick={this.onClickHandler} className="button">
        Translate
      </button>
    );
  }
}
export default TranslateButton;
