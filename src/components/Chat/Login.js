import React from 'react';

const Login = (props) => {
    const{
        email,
        setEmail,
        password, 
        setPassword,
        emailError,
        passwordError,
        hasAccount, 
        setHasAccount,
        handleLogin,
        handleSignup
    } = props;

    return (
        <section className="login">
            <div className="login_Container">
                <label>Email Address</label> 
                <input 
               
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label> 
                <input 
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                            <p>Don't have an account? 
                                <span onClick={() =>  setHasAccount(!hasAccount)}>Sign up</span>
                            </p>
                        </>

                    ):(
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                           <p>have an account? 
                               <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span>
                           </p>
                           
                       </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
