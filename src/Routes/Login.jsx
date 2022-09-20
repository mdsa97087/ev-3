import { Link,useNavigate } from "react-router-dom";
import {useState,useContext} from "react"
import {AppContext} from "../Context/AppContext"
function Login() {
  const navigate = useNavigate()
 const [email,setEmail]= useState("")
 const [pass,setPass]= useState("")
 const [disable,setDisable] = useState(false)
 const {logIn} = useContext(AppContext);
 
 const HandleSubmit =  (e)=>{
  e.preventDefault()
     setDisable(true)
   fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email:email,password:pass})
   }).then((res)=>res.json())
   .then ((res)=>{
    
    //  console.log(res)

    if(res.token) {
      logIn(res.token)
      navigate("/dashboard")
    }
    

   }).catch((err)=>{
    console.log(err)
   })
 

 }

  return (
    <div className="login-page">
      <form onSubmit={HandleSubmit} className="form" data-testid="login-form">
        <div>
          <label>
            <input value={email} onChange= {(e)=>setEmail(e.target.value)} data-testid="email-input" type="email" placeholder="email" />
          </label>
        </div>
        <div>
          <label>
            <input value={pass} onChange = {(e)=>setPass(e.target.value)}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button disabled={disable} data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
