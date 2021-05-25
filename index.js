import React from "react";
import ReactDOM from 'react-dom';
import './index.css';

function TextField(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <input type="text" value={props.value} onChange={props.onChange}/>
                <input type="submit" value='Add'/>
            </form>
        </div>

    )
}

function TasksList(props){
    const tasks = props.value;
    const task = tasks.map((task, number) => {
        return(
            <div className='task' key={number}>
                {task}
                {/*<button onClick={props.onClick}> delete</button>*/}
            </div>
        )
    })
    return(
        <div>
            {task}
        </div>

    )
}

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            value: '',
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({value: e.target.value})
    }

    handleSubmit(e) {
        const tasks = this.state.tasks.slice();
        tasks.push(this.state.value)
        this.setState({
            tasks: tasks,
            value: '',
        });
        e.preventDefault();
    }

   /* deleteTask(task){
        const tasks = this.state.tasks.slice();
        tasks.splice(tasks.indexOf(task), 1)
        this.setState({
            tasks: tasks,
        });
    }*/

    render() {

        return (
            <div className='container'>
                <div className='textField'>
                    <TextField
                        value={this.state.value}
                        onChange={this.handleChange}
                        onSubmit={this.handleSubmit}/>
                </div>
                <div className='tasksList'>
                    <TasksList value={this.state.tasks} onClick={this.deleteTask}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <Todo/>,
    document.getElementById('root')
);