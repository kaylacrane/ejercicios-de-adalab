import React from 'react';
let result;
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    /*result comes from parent and its value is set to input value here*/
    result = event.currentTarget.value;
    console.log(result);
    this.props.handleText(result);
  }

  render() {
    const styleInput = {
      fontSize: '30px',
      backgroundColor: 'lightgrey',
    };
    return (
      <textarea
        onChange={this.onChangeHandler}
        id="textArea"
        style={styleInput}
        value={result}
        rows="5"
        cols="30"
      ></textarea>
    );
  }
}

export default TextInput;
