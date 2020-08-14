import React from 'react';

class Translator extends React.Component {
  render() {
    /*we get text value from parent MIMIMI and display it in the HTML*/
    const vowels = /[aeiou]+/g;
    const translation = this.props.text.toLowerCase().replace(vowels, 'i');

    const styleParagraph = {
      color: 'blue',
      fontSize: '30px',
      maxWidth: '50vw',
      overflowWrap: 'break-word',
    };
    return (
      <p className="paragraph" style={styleParagraph}>
        {translation}
      </p>
    );
  }
}
export default Translator;
