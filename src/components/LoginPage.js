import React from 'react';
import { connect } from 'react-redux'
import SignupForm from './SignupForm'
import { startLogin } from '../actions/auth'
import StyledFirebaseLogin from './StyledFirebaseLogin'

export class LoginPage extends React.Component {
  state = {
    error: ''
  }
  onSubmit = (email, passwordOne) => {
    this.props.startLogin(email, passwordOne)
      .then(() => {
        this.props.history.push('/')
      })
      .catch((error) => {
        this.setState(() => ({ error: error.message }))
      })
  }

  render() {

    return (
      <div className="flex justify-center">
        <div className="tc w-100 w-50-m w-30-l">
          <div className="f5 blue fw5 ttu tracked mt5">Welcome Back!</div>
          <div className="mv1">
            <StyledFirebaseLogin />
          </div>
          <div className="f5 gray fw5 ttu tracked">OR</div>
          <SignupForm onSubmit={this.onSubmit} formType='login' />
          {!!this.state.error && <p>{this.state.error}</p>}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: (email, password) => dispatch(startLogin(email, password))
})

export default connect(undefined, mapDispatchToProps)(LoginPage)