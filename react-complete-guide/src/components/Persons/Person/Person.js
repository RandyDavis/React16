import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component{
    constructor(props) {
		super(props);
		console.log('[Person.js] - Inside Constructor', props);
	}

	componentWillMount() {
		console.log('[Person.js] - Inside componentWillMount()');
	}

	componentDidMount = () => {
	  console.log('[Person.js] - Inside componentDidMount()');
	}
    render(props) {
        console.log('[Person.js] - Inside render()');
        return (
            <Aux classes={classes.Person}>
                <p onClick={this.props.click}>I'm { this.props.name } a person and a I am { this.props.age } years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Aux>
        )
        // return [
        //     <p key="1" onClick={this.props.click}>I'm { this.props.name } a person and a I am { this.props.age } years old.</p>,
        //     <p key="2">{this.props.children}</p>,
        //     <input type="text" onChange={this.props.changed} value={this.props.name}  key="3" />
        // ]
    }

}

export default withClass(Person, classes.Person);