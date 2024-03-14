import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WomenProductPage = () => {
  const [WomenProductList, setProductList] = useState([]);

  const women_url = [
    "//image.msscdn.net/images/goods_img/20231108/3698508/3698508_17035603971546_220.jpg",
    "/image.msscdn.net/images/goods_img/20231019/3642078/3642078_16977615864837_220.jpg",
    "/image.msscdn.net/images/goods_img/20240103/3772322/3772322_17048827506646_220.jpg",
    "/image.msscdn.net/images/goods_img/20230907/3539913/3539913_16951178921388_220.png",
    "/image.msscdn.net/images/goods_img/20230803/3443552/3443552_16922373173526_220.jpg",
    "/image.msscdn.net/images/goods_img/20230831/3516569/3516569_17103774389316_220.jpg",
    "/image.msscdn.net/images/goods_img/20220818/2723767/2723767_16907797353344_220.jpg",
    "/image.msscdn.net/images/goods_img/20240103/3772318/3772318_17048827123482_220.jpg",
    "/image.msscdn.net/images/goods_img/20211022/2194649/2194649_5_220.png",
    "/image.msscdn.net/images/goods_img/20230726/3427774/3427774_16904359555767_220.jpg",
    "/image.msscdn.net/images/goods_img/20230803/3442679/3442679_16923249991299_220.jpg",
    "/image.msscdn.net/images/goods_img/20220913/2786359/2786359_1_220.jpg",
    "/image.msscdn.net/images/goods_img/20220818/2723764/2723764_16919781225829_220.jpg",
    "/image.msscdn.net/images/goods_img/20220807/2702397/2702397_16970769238682_220.jpg",
    "/image.msscdn.net/images/goods_img/20240105/3779298/3779298_17049697025925_220.jpg",
  ];

  const getWomenProduct = async () => {
    let url = `http://localhost:5000/women_products`;
    let response = await fetch(url);
    let data = await response.json(response);
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getWomenProduct();
  }, []);

  return (
    <Row>
      {WomenProductList.map((product, index) => (
        <Col key={index} xs={12} sm={6} md={4}>
          <ProductCard product={product} image_url={women_url[index]} />
        </Col>
      ))}
    </Row>
  );
};

export default WomenProductPage;
