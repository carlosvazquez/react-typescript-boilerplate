import * as React from 'react';
import { ITask } from './ITask';

class TaskForm extends React.Component<ITaskFormProps, ITaskFormState> {
    constructor(props: ITaskFormProps){
        super(props);
    }
    handleTask = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // this.props.addNewTask(e)
        const newTask = {
            id: 1,
            title: '',
            description: '',
            completed: false
        }
        console.log('Saving...');
    }
    handleInputChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        console.log(e.target.value);
    }
    render(){
        return(
            <div className="card card-body">
                <form onSubmit={e => this.handleTask(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            onChange={e => this.handleInputChange(e)}
                            placeholder="Task title"/>
                    </div>
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            onChange={e => this.handleInputChange(e)}
                            placeholder="Task description">
                        </textarea>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">Save</button>
                </form>
            </div>
        )
    }
}
interface ITaskFormProps {
    addNewTask: (task: ITask) => void
}
interface ITaskFormState {
    title: string,
    description: string
}

export default TaskForm;