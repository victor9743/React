import FullPageLoader from '../components/FullPageLoader.jsx';
import {  useState  } from 'react';
import {  auth } from '../firebase/config.js';
import {  createUserWithEmailAndPassword, 
          sendPasswordResetEmail, 
          signInWithEmailAndPassword,
          onAuthStateChanged  
} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { setUser } from '../store/usersSlice.js';

function LoginPage() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [loginType, setLoginType] = useState('login');
  const [userCredentials, setUserCredentials] = useState([]);
  const [error, setError] = useState('');


  onAuthStateChanged(auth, (user) => {
    if (user) {
      dispatch(setUser({id: user.uid, email: user.email}));

    } else {
      dispatch(setUser(null));
    }
    if (isLoading) setIsLoading(false);
  });

  function handleCredentials(e) {
    setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
  }

  function handleSigup(e) {
    setError('');
    e.preventDefault();

    createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .catch((error) => {
      setError(error.message);
    });
  }

  function handleLogin(e) {
    setError('');
    e.preventDefault();
    signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
    .catch((error) => {
      setError(error.message);
    });
  }

  function handlePasswordReset () {
    const email = prompt('Please enter you email');
    sendPasswordResetEmail(auth, email);
    alert('Email sent! Check you inbox for password reset instructions');
  }

    return (
      <>
        { isLoading && <FullPageLoader></FullPageLoader> }
        
        <div className="container login-page">
          <section>
            <h1>Welcome to the Book App</h1>
            <p>Login or create an account to continue</p>
            <div className="login-type">
              <button 
                className={`btn ${loginType == 'login' ? 'selected' : ''}`}
                onClick={()=>setLoginType('login')}>
                  Login
              </button>
              <button 
                className={`btn ${loginType == 'signup' ? 'selected' : ''}`}
                onClick={()=>setLoginType('signup')}>
                  Signup
              </button>
            </div>
            <form className="add-form login">
                  <div className="form-control">
                      <label>Email *</label>
                      <input type="text" onChange={(e) => {handleCredentials(e)}} name="email" placeholder="Enter your email" />
                  </div>
                  <div className="form-control">
                      <label>Password *</label>
                      <input type="password" onChange={(e) => {handleCredentials(e)}} name="password" placeholder="Enter your password" />
                  </div>
                  {
                    loginType == 'login' ?
                    <button onClick={(e) => {handleLogin(e)}} className="active btn btn-block">Login</button>
                    : 
                    <button onClick={(e) => {handleSigup(e)}} className="active btn btn-block">Sign Up</button>
                  }

                  {
                    error &&
                    <div className="error">
                      
                      {error}
                    
                    </div>
                  }
                  <p onClick={handlePasswordReset} className="forgot-password">Forgot Password?</p>
                  
              </form>
          </section>
        </div>
      </>
    )
  }
  
  export default LoginPage
  