import React from 'react';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<ul>
					<li>
						<a href="/login">login</a>
					</li>

					<li>
						<a href="/signup">signup</a>
					</li>
				</ul>
			</div>
		);
	}
}
export default Homepage;
