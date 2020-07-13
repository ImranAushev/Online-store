import React, { Component } from 'react';
import { Card, Container } from 'semantic-ui-react';
import axios from 'axios';
// import { Container, Row, Col } from 'react-grid-system';

import BookCard from '../containers/BookCard';
import Filter from '../containers/Filter';
import Menu from '../containers/Menu';
import Footer from './Footer';

class App extends Component {
  componentDidMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data);
    });
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
            <Card.Group itemsPerRow={5}>
          {!isReady
            ? 'Загрузка...'
            : books.map((book_array, i) => <BookCard key={i} {...book_array} />)
            }
        </Card.Group>
        <Footer />
      </Container>
    );
  }
}

export default App;
