
import React,{Component,createContext} from 'react';

export const ThemeContext=createContext();

class ThemeContextProvider extends Component {
    constructor(props) {
        super(props);


        this.state = {
            lightTheme:false,
            lightColor:"grey",
            darkColor:"red"
         };
    }

    onThemeToggle()
    {
        console.log("Button Clicked");
        this.setState({lightTheme:!this.state.lightTheme});
    }


    render() {
        return (
            <ThemeContext.Provider value={{...this.state,onThemeToggle:this.onThemeToggle.bind(this)}} >
            {this.props.children}
            </ThemeContext.Provider>
        );
    }
}


export default ThemeContextProvider;