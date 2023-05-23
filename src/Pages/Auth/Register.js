import React, { useState } from "react";
import Layout from "../../Components/Layouts/Layout";
import axios from "axios";
import { toast} from "react-toastify";
const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();

  const submitHandle = async(e)=>{
        e.preventDefault();
        toast.success("submitHandle")
       await axios
         .post(`${process.env.REACT_APP_API}/api/Register`, {name,email,phone,password,address,
         })
         .then((res) => {
           console.log(res);
         })
         .catch((err) => {
           console.log(err);
         });
        
  }
  return (
    <Layout>
      <div className="register">
        <h1>Register</h1>
        <form onSubmit={submitHandle}>
          <div className="form-group ">
            <input
              type="Name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="phone"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>

          <div className="form-group mt-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="form-group mt-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            />
          </div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
