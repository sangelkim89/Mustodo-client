import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

class Login extends React.Component {
	state = {
		email: '',
		password: ''
	};
	handleChange = key => e => {
		this.setState({
			[key]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		const { handleIsLoginChange } = this.props;
		
		return axios
			.post('http://localhost:4000/user/login', {
				email: email,
				password: password
			})
			.then(() => {
				handleIsLoginChange();
				this.props.history.push('/');
			})
			.catch(err => console.log(err));
	};

	render() {
		return (
			<>
				<h1>Sign In</h1>
				<form onSubmit={this.handleSubmit}>
					<input placeholder={'이메일'} value={this.state.email} onChange={this.handleChange('email')} />
					<div>
						<input
							placeholder={'비밀번호'}
							value={this.state.password}
							onChange={this.handleChange('password')}
						/>
					</div>
					<div>
						<Link to="/signup">아직 아이디가 없으신가요?</Link>
					</div>
					<button type="submit">로그인</button>
				</form>
			</>
		);
	}
}

export default withRouter(Login);
