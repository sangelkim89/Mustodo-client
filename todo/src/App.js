import React from 'react';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';

import Homepage from '../src/pages/homepage';
import Login from '../src/pages/login';
import Mypage from '../src/pages/mypage';
import Signup from '../src/pages/signup';
import Todopage from '../src/pages/todopage';
import Timer from '../src/pages/timer';

axios.defaults.withCredentials = true;

class App extends React.Component {
	state = {
		isLogin: false
	};
	handleIsLoginChange = () => {
		this.setState({ isLogin: true });
	};

	render() {
		const { isLogin } = this.state;
		return (
			<>
				<Timer />
				<Router>
					<Switch>
						<Route exact path="/" render={() => <Homepage isLogin={isLogin} />} />
						<Route path="/login" render={() => <Login handleIsLoginChange={this.handleIsLoginChange} />} />
						<Route exact path="/signup" render={() => <Signup isLogin={isLogin} />} />
						<Route exact path="/mypage" render={() => <Mypage isLogin={isLogin} />} />
						<Route exact path="/todopage" render={() => <Todopage />} />

						{/* {!isLogin ? <Redirect from="*" to="/login" /> : <Redirect from="*" to="/" />} */}
					</Switch>
				</Router>
			</>
		);
	}
}

export default App;
