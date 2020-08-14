import React from 'react';

class CategoryButton extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.handleClick();
  }
  render() {
    const category = this.props.category;
    return (
      <button className="button" onClick={this.onClickHandler}>
        {category}
      </button>
    );
  }
}
export default CategoryButton;
