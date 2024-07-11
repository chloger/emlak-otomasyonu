import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = async () => {
    try {
      if (password === confirmPassword) {
        const res = await axios.post("http://localhost:3000/user", {
          name,
          email,
          password
        }
        )
        console.log(res)
        window.localStorage.setItem("userInfo", res.data);
        window.location = "/"
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: '#222831', marginBottom: '20px' }}>Kayıt Ol</h2>
        <Form onFinish={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[{ required: true, message: 'Please confirm your password!' }]}
          >
            <Input.Password value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button style={{ backgroundColor: 'green', borderColor: 'green', color: '#EEEEEE' }} type="primary" htmlType="submit" >
              Kayıt Ol
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default RegisterPage

