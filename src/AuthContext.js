import React,{Component,createContext} from 'react';

export const AuthContext=createContext();


class AuthContextProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn:false
        };
    }

    onAuthChange()
    {
        console.log("Button Pressed");
        this.setState({isLoggedIn:!this.state.isLoggedIn});
    }

    render() {
        return (
            <AuthContext.Provider value={{...this.state,onAuthChange:this.onAuthChange.bind(this)}}>
            {this.props.children}
            </AuthContext.Provider>
        );
    }
}

export default AuthContextProvider;