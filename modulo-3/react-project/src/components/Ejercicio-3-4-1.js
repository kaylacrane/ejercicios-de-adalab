import React from 'react';
import '../stylesheets/App.css';
import PropTypes from 'prop-types';

const arrayOfItems = [
  {
    name: 'Cereales con chocolate',
    description: 'Cereales rellenos de chocolate',
    quantity: 2,
    category: 'Cereales',
    price: 5,
  },
  {
    name: 'Hamburguesa con queso',
    description: 'Hamburguesa rica y saludable',
    quantity: 1,
    category: 'Fast-food',
    price: 15,
  },
  {
    name: 'Agua mineral',
    description: 'Agua de un charco del Himalaya',
    quantity: 2,
    category: 'Bebida',
    price: 5,
  },
];

class App extends React.Component {
  render() {
    /*run through list to filter out price over 10*/
    const listItems = arrayOfItems.filter((product) => product.price < 10);
    /*new array with filtered items only*/
    const newList = listItems.map((item, i) => (
      /*using key={i} isn't reliable when the array items might change places/index*/
      <div className="item" key={i}>
        <h5 className="quantity">{item.quantity}</h5>
        <div>
          <h5>{this.props.name}</h5>
          <h6 className="text-muted">{item.description}</h6>
        </div>
        <div className="badge badge-info">{item.category}</div>
        <h5 className="price">{item.price}€</h5>
      </div>
    ));

    return <ul>{newList}</ul>;
  }
}

App.propTypes = {
  quantity: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
};

App.defaultProps = {
  quantity: 2,
  category: 'food',
};
App.propTypes = {
  children: PropTypes.isRequired,
};

export default App;
