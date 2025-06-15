import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import "./Signup.css"
import SignupText from '../assets/SignupText';
const Signup = () => {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[confirmPassword,setConfirmPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate()
  const {signup,logout} =useAuth();
const handleSubmit= async (e)=>{
e.preventDefault();
if (password!==confirmPassword){
  return setError("Passwords do not match")
}
if (password.length<6){
  return setError("Password must be at least 6 characters long")
}
try{
setError("")
setLoading(true)
console.log("creating account with",{email})
 const userCredentionals=await signup(email,password)
 console.log("Created Account",{userCredentionals})
 alert('Your account has been signed up successfully!');
 await logout();
            navigate('/login');}
catch (err) {
  console.error('Detailed signup error:', {
    code: err.code,
    message: err.message,
    fullError: err
  });

  switch (err.code) {
    case "auth/email-already-in-use":
      setError("An account with this email already exists");
      break;
    case "auth/weak-password":
      setError("Password is too weak. Please use a stronger password.");
      break;
    case "auth/operation-not-allowed":
      setError("Email/password accounts are not enabled. Please contact support.");
      break;
    case "auth/invalid-email":
      setError("Invalid email address");
      break;
    default:
      setError(`Failed to create account: ${err.message}`);
  }

}
setLoading(false)
}
  return (
   <div className="signup-container">
     <div className="signup-form">
     <SignupText className="login-image"></SignupText>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input"
              placeholder="Enter your password"
              required
              minLength="6"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
              placeholder="Confirm your password"
              required
              id="confirm-password"
              minLength="6"
            />
          </div>
          
          <button type="submit" className="submit-button" disabled={loading}>
          {loading?"Creating Account...":"Sign Up"}
          </button>
        </form>
        <div className="login-link">
        Already have an account? <Link to="/login">Login</Link>
        </div>
   </div>
   </div>
  )
}

export default Signup