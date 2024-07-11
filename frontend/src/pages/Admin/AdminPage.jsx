import React, { useState, useEffect } from 'react';
import { List, Card, Button, Row, Col, Carousel } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import Navbar from '../../components/Navbar.jsx';
import axios from 'axios';

const EstateList = () => {
    const [estates, setEstates] = useState([]);
    const apiUrl = 'http://localhost:3000/estate/all-estate';

    useEffect(() => {
        // Axios ile GET isteği gönderme
        axios.get(apiUrl)
            .then(response => {
                // Başarılı cevap durumunda veriyi setState ile saklama
                console.log('API Cevabı:', response.data);
                setEstates(response.data);
            })
            .catch(error => {
                // Hata durumunda konsola hatayı yazdırma
                console.error('API İstek Hatası:', error);
            });
    }, []);

    const handleDelete = async (id) => {
        try {
            const deleteUrl = `http://localhost:3000/estate/estate-delete/${id}`;
            await axios.delete(deleteUrl);
            alert("Estate başarıyla silindi.");
            setEstates(estates.filter(estate => estate._id !== id)); // Listeyi güncelleme
        } catch (error) {
            alert("Estate silinirken bir hata oluştu: " + error.message);
        }
    };

    const addEstateButton = () => {
        window.location.href = "/admin/createestate";
    }
    const userInfo = localStorage.getItem("userInfo");
    const { email } = JSON.parse(userInfo);

    return email === "alperen@gmail.com"
        ? (
            <div>
                <Navbar />
                <Button type="primary" onClick={() => addEstateButton()} icon={<PlusOutlined />} style={{ marginBottom: 20 }}>
                    Add Estate
                </Button>
                <List
                    className='estatelist'
                    grid={{ gutter: 16, column: 2 }}
                    dataSource={estates}
                    renderItem={(estate) => (
                        <List.Item className='estatelistitem'>
                            <Card
                                cover={
                                    <Carousel style={{ height: "auto", width: "600px", margin: "10px auto 0 auto" }} >
                                        {[estate.imagelink1, estate.imagelink2, estate.imagelink3, estate.imagelink4].filter(link => link).map((link, index) => (
                                            <div key={index} className='carousel-container'>
                                                <img style={{ borderRadius: "20px" }} className='carousel-image' alt={`Image ${index + 1}`} src={link} />
                                            </div>
                                        ))}
                                    </Carousel>
                                }
                                actions={[
                                    <DeleteOutlined className='delete-button' key="delete" onClick={() => handleDelete(estate._id)} />,
                                ]}
                            >
                                <Card.Meta
                                    style={{ height: "max-content" }}
                                    title={estate.name}
                                    description={(
                                        <>
                                            <p>Konum: {estate.location}</p>
                                            <p>Net M2: {estate.netM}</p>
                                            <p>Kira Fiyatı: {estate.brutM}</p>
                                            <p>Oda Sayısı: {estate.roomC}</p>
                                            <p>Aidat: {estate.aidat}</p>
                                            <p>Eşyalı: {estate.furnished ? 'Var' : 'Yok'}</p>
                                            <p>Bulundugu Kat: {estate.floor}</p>
                                            <p>Park Alanı: {estate.park ? 'Var' : 'Yok'}</p>
                                            <p>Açıklama: {estate.description}</p>
                                        </>
                                    )}
                                />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        )
        : (
            <div>
                Admin Değilsiniz
            </div>
        );
};

export default EstateList;