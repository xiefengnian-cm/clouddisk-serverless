import React, { useState, useEffect } from 'react';
import { useRequest } from 'ahooks';
import { loginApi, registerApi } from './apis/lambda/user';
export default () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const { run: runRegister } = useRequest(registerApi, {
    manual: true,
    onSuccess: (res) => {
      console.log(res);
      alert('success');
    }
  })
  const onSubmit = () => {
    runRegister({
      username: username,
      pwd: password,
      email: email
    })
  }
  const {run:runLogin} = useRequest(loginApi,{
    manual : true,
    onSuccess : (res)=>{
      if(res.status === 200){
        console.log(res);
        alert('success');
      } else {
        alert(res.body?.reason);
      }
      
    }
  })
  const onLogin = ()=>{
    runLogin({
      username,
      pwd : password,
    })
  }
  return (
    <div className="App">
      <div>
        <h1>注册</h1>
        <input type="text" onChange={e => setUsername(e.target.value)} />
        <input type="text" onChange={e => setPassword(e.target.value)} />
        <input type="text" onChange={e => setEmail(e.target.value)} />
        <button onClick={onSubmit}>Register</button>
      </div>
      <div>
        <h1>登录</h1>
        <input type="text" onChange={e => setUsername(e.target.value)} />
        <input type="text" onChange={e => setPassword(e.target.value)} />
        <button onClick={onLogin}>login</button>
      </div>
      <div>
        
      </div>
    </div>
  );
};