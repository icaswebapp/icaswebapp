import React , {Component , createContext} from "react";
import Firebase from "./Firebase";

const defaultFirebaseContext = {
    authStatusReported: false,
    isUserSignedIn: false
};

export const FirebaseAuthContext = createContext(defaultFirebaseContext);


export default class FirebaseAuthProvider extends Component {

    state = defaultFirebaseContext;

    componentDidMount() {
        Firebase.auth.onAuthStateChanged(user => this.setState({
            authStatusReported: true,
            isUserSignedIn: !!user
        }));
    }

    render(){
        const {authStatusReported, isUserSignedIn} = this.state;
        console.log('CONTEXT API: USER STATUS -> ' , isUserSignedIn , authStatusReported)
        return (
            <FirebaseAuthContext.Provider value={{isUserSignedIn, authStatusReported}}>
                {this.props.children}
            </FirebaseAuthContext.Provider>
        );
    }
}