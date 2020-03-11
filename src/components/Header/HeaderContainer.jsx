import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {logoutThunk} from '../../redux/authReducer'


class HeaderContainer extends React.Component {

  render() {

    return (
      <Header {...this.props} />
    )
  }
}


const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login,
});

export default connect(mapStateToProps, {logoutThunk})(HeaderContainer);