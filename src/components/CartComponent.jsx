import React from "react";
import './Footer.css';
import '../media.css';
import './CartContent.css';


const CartComponent = book => {
    const { title, author, price, image, id, removeFromCart, addToCart} = book;
    return (
    <div className="selectionMiddle">
      <div className="container">
        <div className="row">
          <div className="col-7 col-sm-8 col-md-4 col-lg-3 col-xl-3">
            <div className="book_card_magaz">
              <img src={image} alt="img" />
              <div className="ListContent">{title} <br/> <i>{author}</i></div>
            </div>
          </div>
          <div className="col-5 col-sm-4 col-md-2 col-lg-2 col-xl-2">
            <div className="book_card_magaz">
              <div className="ListPrice"><span>цена - </span>{price} руб</div>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <div className="ListRight">
              <button onClick={removeFromCart.bind(this, id)}>
                Удалить
              </button>
            </div>
          </div>
          <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3">
            <div className="ListRights" color="#fff">
              <button onClick={addToCart.bind(this, book)}>
                Добавить 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )};

  export default CartComponent;