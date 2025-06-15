import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import LoginText from "../assets/LoginText";
import "./Login.css"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState("")
  const [loading,setLoading]=useState(false)
  const navigate = useNavigate();
  const {login}=useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
  try{
        setError("")
    setLoading(true)
        
      await login(email,password);
      navigate("/")}


    catch(error){
console.error("login error:",error)
if (error.code==="auth/invalid-email"){
  setError("Invalid email address")
    }
else if (error.code==="auth/user-not-found"){
  setError("No account with this email")
  }
  else if (error.code==="auth/wrong-password"){
setError("Incorrect Password"
)
  }else{
    setError("Failed to sign in. Please check your credentials.")
  }}
  setLoading(false)
}
  return (
    <div className="login-container">
      <div className="login-form">
        <LoginText className="login-image"></LoginText>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email"className="form-label">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              required
              placeholder="Enter your email"
              id="email"
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
            />
          </div>
          
          <button type="submit" className="submit-button" disabled={loading}>
          {loading?"Logging in...":"Login"}
          </button>
        </form>
        <div className="signup-link">
        Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
