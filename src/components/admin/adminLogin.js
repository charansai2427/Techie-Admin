import { Form, useNavigate } from "react-router-dom";
import { FormGroup, Label, Input, Button } from "reactstrap";
import "../../styles/register.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../redux/slices/dataSlice";
import { Link } from "react-router-dom";
export default function AdminLogin() {
  const [formData, setFormData] = useState({});
  const Login = useSelector((state) => state.User.value.login)
  const {token , access} = Login;
  // const token = localStorage.getItem("token");
  // const access = localStorage.getItem("access")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(LoginUser(formData));
  };

  const handleClick2 = (e) =>{
    e.preventDefault();
    navigate("/admin/register")
  }
   useEffect(() => {
    if(token && access){
      navigate("/animation")
    }    
  }, [token,access]);
  return (
    <div className="register-container">
      <div className="imagediv">
        <img src="https://codezo.s3.amazonaws.com/static/img/login-page1.jpg" />
      </div>
      <div className="formDiv">
        <Form onSubmit={handleClick}>
          <FormGroup>
            <Label for="exampleEmail" className="h4" style={{color:'white'}}>
              Admin Login
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail" style={{color:'white'}}>Email :</Label>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email Address"
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword"style={{color:'white'}} >Password :</Label>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password"
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </FormGroup>
              <br/>
        <Label check className="register" onClick={handleClick2} style={{marginLeft:'2em'}}>Doesn't Have An Account ? Register</Label>
<br/>
<br/>
          <FormGroup className="text-center">
            <Button type="submit" className="bg-success" onClick={handleClick}>
              Login
            </Button>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
}
