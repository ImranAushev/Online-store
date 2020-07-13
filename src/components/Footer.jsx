import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    constructor() {
        super()
        this.state = {
            about: true,
            map: true,
            contacts: true
        }
    }

    handleClickAbout = () => {
        this.setState(prevState => {
            return {
                about: !prevState.about
            }
        })
    }

    handleClickMap = () => {
        this.setState(prevState => {
            return {
                map: !prevState.map
            }
        })
    }

    handleClickContact = () => {
        this.setState(prevState => {
            return {
                contacts: !prevState.contacts
            }
        })
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="menu">
                                    <ul className="footer_main">
                                        <li href="#" 
                                            className="item" 
                                            onClick={this.handleClickMap}>
                                            {this.state.map ? 
                                            <a href="#Footer" className="footer_out_name">Карта</a> : 
                                            <span href="#Footer" className="map">
                                                <div className="close">
                                                    <i>закрыть</i>
                                                </div>
                                                <div className="map_ssilka">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2251.9259001120854!2d37.84257625102239!3d55.63810320820494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x414ab6e1308d8685%3A0x2d7cc2d1a502ed62!2z0YPQuy4g0KjQsNC80LAsIDfQkCwg0JTQt9C10YDQttC40L3RgdC60LjQuSwg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC7LiwgMTQwMDkx!5e0!3m2!1sru!2sru!4v1591440197117!5m2!1sru!2sru" width="100%" height="250" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                                                </div>    
                                            </span>
                                            }
                                        </li>

                                        <li href="#" 
                                            className="item" 
                                            onClick={this.handleClickContact}>
                                            {this.state.contacts ? 
                                            <a href="#Footer_contacts" className="footer_out_name">Контакты</a> : 
                                            <span href="#Footer_contacts" className="contacts">

                                                <div className="close">
                                                    <i>закрыть</i>
                                                </div>

                                                <div className="e_mail">
                                                    <h4>Контакты</h4>
                                                    <p>Книжный интернет-магазин «MAGAZ» <br/>МО, Дзержинский, ул. Шама, д.7Б, к.23
                                                    <br/>Электронная почта: <a href="https://e.mail.ru/inbox/">imran0898@mail.ru</a></p>
                                                </div>
                                                <br/>
                                                <div className="grafic">
                                                    <h4>График работы операторской службы:</h4>
                                                    <p>Ежедневно, круглосуточно.</p>
                                                </div>
                                                <br/>
                                                <div className="phone">
                                                    <h4>Москва:</h4>
                                                    <p>tel: +7 999 336-00-75</p>
                                                    <p>WatsApp: +7 968 368-06-06</p>
                                                </div>  

                                            </span>}
                                        </li>

                                        <li href="#" 
                                            className="item" 
                                            onClick={this.handleClickAbout}>
                                            {this.state.about ? 
                                            <a href="#Footer_about" className="footer_out_name">Вопросы и ответы</a> : 
                                            <span className="about">
                                                <div className="close">
                                                    <i>закрыть</i>
                                                </div>
                                                <div className="qustions_answer">
                                                    <h3>О доставке книг</h3>
                                                    <h3>Доставляете ли вы книги за рубеж?</h3>
                                                    <p>Самостоятельно мы производим доставку только по городам России, так как доставка за рубеж нашими силами была бы слишком дорогой для клиентов.</p>
                                                    <h3>Можно ли изменить адрес доставки после оформления заказа?</h3>
                                                    <p>Можно. Но это может повлиять на дату доставки. Если изменение адреса происходит в день доставки, то она переносится на следующий рабочий день.</p>
                                                    <h3>Как изменить адрес доставки после оформления заказа?</h3>
                                                    <p>Чтобы изменить адрес доставки, позвоните по номеру 8 999 336-00-75 или напишите на <a href="#Footer"> imran0898@mail.ru.</a>Если он уже был собран и передан в курьерскую службу, то скорее всего сроки доставки не изменятся.</p>
                                                    <h3>Можно ли изменить способ доставки после оформления заказа?</h3>
                                                    <p>Способ доставки можно изменить, если заказ еще не передан в курьерскую службу. Чтобы изменить адрес доставки, позвоните по номеру 8 999 336-00-75 или напишите на <a href="#Footer"> impan0898@mail.ru.</a> Если вам нужно срочно поменять сроки доставки — лучше звоните.</p>
                                                </div>
                                            </span>}
                                        </li>                 
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="name_autor_and_name_store">
                                    <h5>2020 @ MAGAZ</h5>
                                    <span>Designed from Aushev I</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="adress">
                                    <span>МО, Дзержинский, ул. Шама, д.7Б, к.23</span>
                                    <span>тел: 8-999-336-00-75</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
    
export default Footer;