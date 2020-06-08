import React from 'react';
import Auth from './useAuth';

const LogIn = () => {
    const auth = Auth();
    const handleSigIn = () =>{
        auth.signInWithGoogle()
        .then(res =>{
            window.location.pathname = '/review';
        })
    } 
    const handleSignOut = ()=>{
        auth.signOut()
        .then(res=>{
            window.location.pathname = '/';
        })
    }
    return (
        <div>
            <h1>Join the party</h1>
            
            { auth.user ? <button onClick={handleSignOut}>signOut</button> :
                <button onClick={handleSigIn}>Sign In With Google</button>
            }
        </div>
    );
};

export default LogIn;