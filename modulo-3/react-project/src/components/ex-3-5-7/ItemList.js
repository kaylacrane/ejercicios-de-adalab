import React from 'react';
import '../../stylesheets/App.css';
import CategoryButton from './CategoryButton';
import MapItems from './MapItems';

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
  {
    name: 'Frito Lays',
    description: 'Bolsa de papas fritas',
    quantity: 2,
    category: 'Snacks',
    price: 5,
  },
];
let newList;
const category = 'Bebida';
/*run through list to filter out price over 10*/
let listItems = arrayOfItems.filter((product) => product.price < 10);

class App extends React.Component {
  render() {
    const handleClick = () => {
      // console.log('category', category);
      // newList = arrayOfItems.filter((product) => product.category === category);
      // console.log(newList);
      // newList = filteredList.map((item, i) => (
      //   <div className="item" key={i}>
      //     <h5 className="quantity">{item.quantity}</h5>
      //     <div>
      //       <h5>{item.name}</h5>
      //       <h6 className="text-muted">{item.description}</h6>
      //     </div>
      //     <div className="badge badge-info">{item.category}</div>
      //     <h5 className="price">{item.price}€</h5>
      //   </div>
      // ));
      // console.log('list items', listItems);
      // this.forceUpdate();
    };

    // /*new array with filtered items only*/
    // newList = listItems.map((item, i) => (
    //   /*using key={i} isn't reliable when the array items might change places/index*/
    //   <div className="item" key={i}>
    //     <h5 className="quantity">{item.quantity}</h5>
    //     <div>
    //       <h5>{item.name}</h5>
    //       <h6 className="text-muted">{item.description}</h6>
    //     </div>
    //     <div className="badge badge-info">{item.category}</div>
    //     <h5 className="price">{item.price}€</h5>
    //   </div>
    // ));

    return (
      <>
        <CategoryButton category={category} handleClick={handleClick} />
        <ul>{newList}</ul>
        <MapItems list={newList}></MapItems>
      </>
    );
  }
}

export default App;
