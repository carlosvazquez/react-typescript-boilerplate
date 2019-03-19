import * as React from 'react';
import TaskForm from './TaskForm';
import { ITask } from './ITask';

class App extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            tasks: []
        }
    }
    addNewTask(task: ITask) {
        this.setState({
            tasks: [...this.state.tasks, task]
        })

    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
                    <a href="/" className="navbar-brand">{this.props.title}</a>
                </nav>
                <div className="container p-4">
                    <div className="row">
                        <div className="col-md-4">
                            <TaskForm addNewTask={this.addNewTask}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
interface IProps {
    title: string
}
interface IState {
    tasks: ITask[]
}

export default App;
