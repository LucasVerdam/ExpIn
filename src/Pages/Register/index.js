import React, { useState } from "react";
import { useHistory } from "react-router";
import { api } from "../../Services/api";

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [companyName, setCompanyName] = useState();
  //const [phone, setPhone ] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  function submit(e) {
    e.preventDefault();
    api.post("/perfis/", {
      "nome": name,
      "email": email,
      "senha": password,
      "nome_empresa": companyName
    })
      .then((resp) => {
        console.log(resp);
        history.push("/");
      })
      .catch((error) => console.log(error));
  }


  return (
    <div className="form">
      <form onSubmit={submit}>
        <label>
          Name
          <input type="text" onChange={(e) => setName(e.target.value)}></input>
        </label>

        <label>
          Email
          <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        </label>

        <label>
          CompanyName
          <input type="text" onChange={(e) => setCompanyName(e.target.value)}></input>
        </label>

        {/* <label>
          Phone
          <input type="text" onChange={(e) => setPhone(e.target.value)}></input>
        </label>*/}

        <label>
          Password
          <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
        </label>

        <button>Register</button>
      </form>

    </div>)
}
