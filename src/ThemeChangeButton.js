import React,{Component} from 'react';
import {ThemeContext} from './ThemeContext';


class ThemeChangeButton extends Component {
    constructor(props) {
        super(props);
    };
    static contextType=ThemeContext;

    render() {

        return (
            <button onClick={this.context.onThemeToggle}>
            Toggle Theme
            </button>
        );
    }
}

export default ThemeChangeButton;