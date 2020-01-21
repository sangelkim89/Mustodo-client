import React from 'react';
import axios from 'axios';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

axios.defaults.withCredentials = true;

class Todopage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todos: [],
			nextID: 0
		};
		this.plusTodo = this.plusTodo.bind(this);
		this.remove = this.remove.bind(this);
		this.onToggle = this.onToggle.bind(this);
	}
	onToggle = async id => {
		const { todos } = this.state;
		//💌api 불러와서 토글상태 반대로 만들어주기;;;
		try {
			const { data } = await axios.post('http://localhost:4000/todo/info', {
				todoid: id
			});
			const { todoid, status } = data;

			await axios.post('http://localhost:4000/todo/status', {
				todoid: todoid,
				status: !status
			});
			// 😀
			const onToggleTodos = todos.map(todo => (todo.todoid === id ? { ...todo, status: !todo.status } : todo));
			this.setState({
				todos: onToggleTodos
			});
		} catch (error) {
			console.log(error);
		}
	};

	plusTodo = async inputTodo => {
		const { todos, nextID } = this.state;
		try {
			//
			//💌login 중인 userId가져오기
			const {
				data: { userid }
			} = await axios.get('http://localhost:4000/user/login');
			//💌todo 추가된 거 api로 보내userId 넣어서 보내주기
			await axios.post('http://localhost:4000/todo/add', {
				userid: userid,
				todoid: nextID,
				todoitem: inputTodo,
				status: false
			});
			//😀this.state  관리 하는 부분
			const nextTodo = { userid: userid, todoid: nextID, todoitem: inputTodo, status: false };

			this.setState({
				todos: todos.concat(nextTodo),
				nextID: nextID + 1
			});
		} catch (error) {
			console.log(error);
		}
	};
	remove = id => {
		//💌api에서 같은 아이디 찾아서 삭제해주기
		axios
			.post('http://localhost:4000/todo/delete', {
				todoid: id
			})
			.then(res => {})
			.catch(err => console.log(err));
		//😀
		const { todos } = this.state;
		const filterArray = todos.filter(todo => todo.todoid !== id);

		this.setState({
			todos: filterArray
		});
	};
	componentDidMount() {
		//💌😀api에서 todoList요청 불러와서 this.state.Todos에 concat
		//[{},{},{}]
		const { todos } = this.state;
		axios
			.get('http://localhost:4000/user/todopage')
			.then(res => {
				this.setState({ todos: todos.concat(res.data) });
			})
			.catch(err => console.log(err));
	}
	render() {
		const { todos } = this.state;

		return (
			<>
				<TodoTemplate>
					<TodoInsert plusTodo={this.plusTodo} />
					<TodoList todos={todos} remove={this.remove} onToggle={this.onToggle} />
				</TodoTemplate>
			</>
		);
	}
}

export default Todopage;
