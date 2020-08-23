import React,{Component} from 'react';
import {AuthContext} from './AuthContext';
import {ThemeContext} from './ThemeContext';

class AuthButton extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
        <AuthContext.Consumer>
        {
            (AuthContext)=>{
                return(
                <ThemeContext.Consumer>
                {
                   (ThemeContext)=>{

                        console.log(AuthContext);
                        console.log(ThemeContext);
                        console.log(AuthContext);
                        const {isLoggedIn}=AuthContext;

                        const data=(isLoggedIn)?"Logout":"Login";

                        return(
                            <div>
                            <button onClick={AuthContext.onAuthChange} >{data}</button>
                            </div>
                        )
                    }

                }

                </ThemeContext.Consumer>
            );
            }
        }
        </AuthContext.Consumer>)
    }
}

export default AuthButton;