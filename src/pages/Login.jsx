import React from 'react';
import { Component } from 'react';
import Main from './Main';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            form: {
                email: '',
                password: '',
                isRemember: false
            },
            isValid: false,
            isLoggedIn: false
        };
    }
    handleChange = (event) => {
        this.setState((state) => {
          const { form } = state
          form[event.target.name] = event.target.value
          return { form }
        }, () => this.checkValidForm())
    }
    handleChangeCheckbox = () => {
        this.setState((state) => {
          const { form } = state
          form.isRemember = !form.isRemember
          return { form }
        }, () => this.checkValidForm())
    }
    checkValidForm = () => {
        const { email, password } = this.state.form
        const value = email && password
        this.setState({ isValid: value })
    }
      handleSubmit = () => {
        if (this.state.isValid){
          this.setState({ isLoggedIn: true })
        }
    }
    handleLogOut = () => {
        this.setState({
            isLoggedIn: false
        })
    }
    render () {
        const { isLoggedIn, form } = this.state
        if (isLoggedIn) {
            return (
                <Main onLogOut={this.handleLogOut} />
            )
        }
        return (
            <div className="form">
                <div className="form__signin">
                    <form>
                        <img 
                            className="form__signin__img" 
                            src="https://yolo.vn/wp-content/uploads/2019/08/hinh-anh-cho-pomsky-dep-45.jpg"
                            alt="" width="100" height="100" 
                        />
                        <h1 className='form__signin__text'>Please Login</h1>
                        <div className="form__signin__floating">
                            <label>Email address:</label>
                            <input 
                                className="form__signin__floating__control email" 
                                type="email" name="email" 
                                placeholder="name@example.com" 
                                value={form.email} 
                                onChange={this.handleChange} 
                            />
                        </div>
                        <div className="form__signin__floating">
                            <label>Password:</label>
                            <input 
                                className="form__signin__floating__control password" 
                                type="password" name="password" 
                                placeholder="Password" 
                                value={form.password} 
                                onChange={this.handleChange} 
                            />
                        </div>
                        <div className="form__signin__checkbox">
                            <label>
                                <input 
                                    type="checkbox" 
                                    value={form.isRemember} 
                                    onChange={this.handleChangeCheckbox} 
                                /> Remember me
                            </label>
                        </div>
                        <button 
                            className="form__signin__btn" 
                            type="button" 
                            onClick={this.handleSubmit} 
                        >Sign in</button>
              </form>
            </div>
          </div>
        )
    }
}