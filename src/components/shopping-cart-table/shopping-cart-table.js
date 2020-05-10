import React from 'react';
import './shopping-cart-table.css';
import { connect } from 'react-redux';

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, idx) => {
    const { id, name, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{name}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button 
            onClick={() => onDecrease(id)}  
            className="btn btn-outline-warning">
            <i className="fa fa-minus-circle" />
          </button>
          <button 
            onClick={() => onIncrease(id)}  
            className="btn btn-outline-success">
            <i className="fa fa-plus-circle" />
          </button>
          <button
            onClick={() => onDelete(id)}  
            className="btn btn-outline-danger">
            <i className="fa fa-trash-o" />
          </button>

        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        { items.map(renderRow) }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = ({ cartItems, orderTotal }) => {
  return {
    items: cartItems,
    total: orderTotal
  };
};

const mapDispachtToProps = () => {
  return {
    onIncrease: (id) => {
      console.log(`onIncrease ${id}`);
    },
    onDecrease: (id) => {
      console.log(`onDecrease ${id}`);
    },
    onDelete: (id) => {
      console.log(`onDelete ${id}`);
    },
  }
}

export default connect(mapStateToProps, mapDispachtToProps)(ShoppingCartTable);