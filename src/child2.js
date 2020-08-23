import React,{Component} from 'react';
import {ThemeContext} from './ThemeContext';

class children2 extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }

    static contextType=ThemeContext;

    render() {

        const {lightTheme,lightColor,darkColor}=this.context;
        const theme=(lightTheme)?(lightColor):(darkColor);
        return (
            
            <div style={{background:theme}} >
            <h1> Child-2 </h1>
            </div>
        );
    }
}

export default children2;