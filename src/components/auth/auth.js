import { firebase, googleAuthProvider } from '../../firebase/firebaseConfig';

export const auth =(uid,displayName)=>{
    return{ 
        type: "LOGIN",
        payload: {
            uid,
            displayName
        }
    }
}

export const logout =()=>{
    return{ 
        type: "LOGOUT",
    }
}

export const startGoogleLogin=()=>{
    return(dispatch)=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(
            ({ user }) => {
            dispatch(auth(user.uid,user.displayName))
        }).catch(
            dispatch(logout())
        )
    }
}

export const startLogout=()=>{
    return async(dispatch)=>{
        await firebase.auth().signOut();
        dispatch(logout());
    }
}