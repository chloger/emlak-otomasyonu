import React, { useState } from 'react'
import { Form, Input, Button } from 'antd';
import axios from "axios";


const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      })
      console.log(res)
      alert("kullanıcı girişi başarılı")
      // Kullanıcı bilgilerini localStorage'a kaydet
      window.localStorage.setItem("userInfo", JSON.stringify(res.data));
      // Başarılı giriş sonrası yönlendirme
      window.location = '/'; // Anasayfaya yönlendir

    } catch (error) {
      console.error(error || 'Giriş başarısız!');
    }
  };

  const handleRegister = () => {
    window.location = "/register"
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ color: '#222831', marginBottom: '20px' }}>Oturum Aç</h2>
        <Form onFinish={handleSubmit} style={{ maxWidth: '300px', margin: '0 auto' }}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input style={{ width: 180 }} value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password style={{ width: 150 }} value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>
          <Form.Item>
            <Button style={{ backgroundColor: 'green', borderColor: 'green', color: '#EEEEEE' }} type="primary" htmlType="submit">
              Oturum Aç
            </Button>
          </Form.Item>
        </Form>
        <Button onClick={() => handleRegister()} style={{ backgroundColor: '#222831', borderColor: '#222831', color: '#EEEEEE', marginTop: '10px' }}>Kayıt Ol</Button>
      </div>
    </div>
  )
}

export default LoginPage;
