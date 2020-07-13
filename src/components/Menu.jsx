import React, {Component} from "react";
import CartComponent from './CartComponent';
import './Footer.css';
import '../media.css';
import './CartContent.css';
import '../containers/Menu';

class MenuComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      choice: false,
      forms: false,
      price: ["Девушка в тумане - Донато Карризи", "Империя должна умереть - Михаил Зыгарь", "Земное притяжение - Татьяна Устинова"]
    }
  }

  handleClickforms = () => {
    this.setState(prevState => {
        return {
          price: prevState.price
        }
    })
}

  forms = () => {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
        forms: !prevState.forms
      }
    })
  }

  close = () => {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn,
      }
    })
  }

  handleClicks = () => {
    const { count } = this.props;
    count < 1 ? 
      this.setState(prevState => {
        return {
          choice: !prevState.choice
        }
      })
    :
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    })
}
  
  render() {
    const { totalPrice, count, items, books} = this.props;
    const nol = null;
    const displayDiv = 
    <div className="any">
      <span className="close" onClick={this.close}>закрыть</span>
      <h3 className="corzina">Корзина</h3>
        {items.map((book, id) => (<CartComponent key={id} {...book} />))}
        <button className="Checkout" onClick={this.forms}>Оформить заказ</button>
    </div>
    const choice = <span>Выберите товар</span>
    const displayCard = this.state.isLoggedIn ? displayDiv : nol;
    const displayChoice = this.state.choice ? choice : nol;

    if(count === 1) {
      this.state.isLoggedIn = false
    }

    if(count >= 0) {
      this.state.choice = false
    }

    return (
      <div className="top_line">
        <div className="container">
          <div className="row">
              <div className="col-3 col-sm-2 col-sm-2 col-md-2 col-lg-4">
                <div className="logo">
                  <img src="/images/book.png" alt="img1" width="50px"/> 
                </div>
              </div>
              <div className="col-9 col-sm-10 col-md-6 col-lg-5">
                <div className="delivery">Бесплатная доставка на сумму от 3000 руб</div>
              </div>
              <div className="col-0 col-sm-0 col-md-4 col-lg-3">
                <div className="round_the_clock">Мы работаем круглосуточно</div>
              </div>
          </div>
        </div> 
        <div className="card_body_block">
          <div className="container">
            <div className="row">
              <div className="col-3 col-sm-2 col-md-1 col-lg-1 col-xl-1">
                <div className="browse">
                  <span className="main_name_store"> MAGAZ </span>
                </div>
              </div>
              <div className="col-0 col-sm-5 col-md-7 col-lg-7 col-xl-7">
                <div className="line_while">
                  <p className="choice">{displayChoice}</p>
                </div>
              </div>
              <div className="col-4 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <div className="card_and_count">
                  <span className="card_price" onClick={this.handleClicks} >Корзина (<b>{count}</b>)</span>
                </div>
              </div>
              <div className="col-5 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                <div className="total_price">
                  <span onClick={console.log(books)}>Итого: &nbsp; <b>{totalPrice}</b>&nbsp;руб</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="any">{displayCard}</div>
        { this.state.forms ? 
        <div className="forms">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
              <form action="mail.php" method="POST">
                <div className="close" onClick={this.forms}>закрыть</div>
                <h4>ПОЛУЧАТЕЛЬ</h4>
                <div className="input">
                  <label htmlFor="name">Имя Отчество</label>
                  <input type="text" className="form-control" id="" name="user_name" pattern="[A-Za-zА-Яа-яЁё]+(\s+[A-Za-zА-Яа-яЁё]+" placeholder="First and middle name"/>
                  <label htmlFor="tel">Телефон</label>
                  <input type="text"  className="form-control" name="user_phone" pattern="^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$"required placeholder="89993360075"/>
                  <label htmlFor="email">эл.почта</label>
                  <input placeholder="e-mail" className="form-control" type="email" name="user_email" />
                  <input type="hidden" name="product" value={this.state.price}/>
                </div>
                <div className="buttons">
                  <button type="submit" className="btn btn-primary" onClick={this.handleUserInput}>Отправить</button>
                </div>
              </form>
              </div>
            </div>
          </div>
        </div> : nol}
      </div>
    )
  }
} 
export default MenuComponent;