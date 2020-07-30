import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutUser} from '../../actions/authActions';
import Footer from './Footer';
import {use} from 'passport';
import Feed from './Feed';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  componentDidMount() {
    console.log('sadas');
  }

  render() {
    const {user} = this.props.auth;
    console.log(user.name);

    return (
      <nav>
        <div class='navbar-fixed' style={{backgroundColor: '#2979FF'}}>
          <a href='#' class='brand-logo' style={{margin: '10px 10px'}}>
            <h6
              style={{
                fontFamily: 'monospace',
                letterSpacing: '2px',
                userSelect: 'none',
              }}
            >
              vorkInsta
            </h6>
          </a>
          <ul class=' right hide-on-med-and-down'>
            <li style={{marginRight: '5px'}}>
              <a>
                <i class='Large material-icons'>home</i>{' '}
              </a>
            </li>

            <li style={{marginRight: '5px'}}>
              <a>
                <i class='Large material-icons'>group</i>{' '}
              </a>
            </li>

            <li style={{marginRight: '5px'}}>
              <a>
                <i class='Large material-icons'>work</i>{' '}
              </a>
            </li>
            <li style={{marginRight: '5px'}}>
              <a>
                <i class='Large material-icons'>chat</i>{' '}
              </a>
            </li>
            <li style={{marginRight: '200px'}}>
              <a>
                <i class='Large material-icons'>notifications</i>{' '}
              </a>
            </li>

            <li style={{marginRight: '0px'}}>
              <a href='#' onClick={this.onLogoutClick}>
                <i class='Large material-icons'>exit_to_app</i>{' '}
              </a>
            </li>
          </ul>
        </div>

        <div style={{height: '75vh'}} className='container valign-wrapper'>
          <div className='row'>
            <div className='landing-copy col s12 center-align'>
              <h4>
                <h6>Hey There{user.name} </h6>
                <p className='flow-text grey-text text-darken-1'>
                  Welcome To vorkInsta We will come soon With new
                  <span style={{fontFamily: 'monospace'}}>Vorkinsta</span> app
                  👏
                </p>
              </h4>
              <button
                style={{
                  width: '150px',
                  borderRadius: '3px',
                  letterSpacing: '1.5px',
                  marginTop: '1rem',
                }}
                onClick={this.onLogoutClick}
                className='btn btn-large waves-effect waves-light hoverable blue accent-3'
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </nav>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {logoutUser})(Dashboard);
