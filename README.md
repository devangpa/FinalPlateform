...

Home Page
--
import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          title: 'Need a react js developer',
          description:
            'it shouuld 3 + year of experience with node js developer',
          budget: '20 $',
          clientName: 'Hanry',
        },
        {
          title: 'Need a Angular js developer',
          description:
            'it shouuld 3 + year of experience with node js developer',
          budget: '20 $',
          clientName: 'Hanry',
        },
        {
          title: 'Need a vue js developer',
          description:
            'it shouuld 3 + year of experience with node js developer',
          budget: '20 $',
          clientName: 'Hanry',
        },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        <div class='container'>
          <nav class='navbar navbar-light bg-light'>
            <a class='navbar-brand'>Navbar</a>
            <form class='form-inline'>
              <input
                class='form-control mr-sm-2'
                type='search'
                placeholder='Search'
                aria-label='Search'
              ></input>
              <button
                class='btn btn-outline-success my-2 my-sm-0'
                type='submit'
              >
                Search
              </button>
            </form>
          </nav>
        </div>
        <hr />
        <div class='container'>
          <div class='row'>
            <div class='col-sm-3'>
              <div class='card'>
                <img
                  class='card-img-top'
                  src='https://mdbootstrap.com/img/Photos/Others/images/43.jpg'
                  alt='Card image cap'
                />
                <div class='card-body'>
                  <h4 class='card-title'>
                    <a>Card title</a>
                  </h4>
                  <p class='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
            <div class='col-sm-6'>
              {this.state.data.map((datamap) => {
                return (
                  <div>
                    <div class='card'>
                      <h5 class='card-header'>Featured</h5>
                      <div class='card-body'>
                        <h5 class='card-title'>Special title treatment</h5>
                        <p class='card-text'>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <a href='#' class='btn btn-primary'>
                          Go somewhere
                        </a>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
            <div class='col-sm-3'>
              {' '}
              <div class='card'>
                <img
                  class='card-img-top'
                  src='https://mdbootstrap.com/img/Photos/Others/images/43.jpg'
                  alt='Card image cap'
                />
                <div class='card-body'>
                  <h4 class='card-title'>
                    <a>Card title</a>
                  </h4>
                  <p class='card-text'>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

{
  /* <Card style={{ width: 'rem' }}>
  <Card.Body>
    <Card.Title>Requrement For Node js</Card.Title>
    <Card.Text>
      we need someone who with 20 year of experience in Node js
    </Card.Text>
    <Card.Text>
      <b>Budget: 20$</b>
    </Card.Text>
    <Button variant="primary">Know-More</Button>
  </Card.Body>
</Card> */
}
