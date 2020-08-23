import React,{Component} from 'react';
import { ThemeContext } from './ThemeContext'; 

class children1 extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    //static contextType=ThemeContext;

    render() {
        return (
            <ThemeContext.Consumer>
            {
                (context)=>{

                    console.log(context);

        
                    const {lightTheme,lightColor,darkColor}=context;
                    const theme=(lightTheme)?(lightColor):(darkColor);

                    return(
                        <div  style={{background:theme}} >
                        <h1> Child-1</h1>
                </div>
              ) 
            }
            }
            </ThemeContext.Consumer> 
        );
    }
}

export default children1;