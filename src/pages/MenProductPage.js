import React from "react";
import { useState, useEffect } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const MenProductPage = () => {
  const [productList, setProductList] = useState([]);
  const url = [
    "/image.msscdn.net/images/goods_img/20240108/3780328/3780328_17078730226305_220.jpg",
    "/image.msscdn.net/images/goods_img/20210917/2139775/2139775_1_220.jpg",
    "/image.msscdn.net/images/goods_img/20240109/3782754/3782754_17055612243362_220.jpg",
    "/image.msscdn.net/images/goods_img/20230831/3520243/3520243_16937477962950_220.jpg",
    "/image.msscdn.net/images/goods_img/20231019/3642078/3642078_16977615864837_220.jpg",
    "/image.msscdn.net/images/goods_img/20240103/3772322/3772322_17048827506646_220.jpg",
    "/image.msscdn.net/images/goods_img/20220308/2407416/2407416_1_220.jpg",
    "/image.msscdn.net/images/goods_img/20230907/3539913/3539913_16951178921388_220.png",
    "/image.msscdn.net/images/goods_img/20240118/3806383/3806383_17055733539161_220.jpg",
    "/image.msscdn.net/images/goods_img/20230803/3443552/3443552_16922373173526_220.jpg",
    "/image.msscdn.net/images/goods_img/20220818/2723767/2723767_16907797353344_220.jpg",
    "/image.msscdn.net/images/goods_img/20211022/2194649/2194649_5_220.png",
    "/image.msscdn.net/images/goods_img/20221219/2987524/2987524_1_220.jpg",
    "/image.msscdn.net/images/goods_img/20240112/3791933/3791933_17077836431483_220.jpg",
    "/image.msscdn.net/images/goods_img/20230726/3427774/3427774_16904359555767_220.jpg",
  ];
  const getProduct = async () => {
    let url = `http://localhost:5000/men_products`;
    let response = await fetch(url);
    let data = await response.json(response);
    console.log(data);
    setProductList(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <Row>
      {productList.map((product, index) => (
        <Col key={index} xs={12} sm={6} md={4}>
          <ProductCard product={product} image_url={url[index]} />
        </Col>
      ))}
    </Row>
  );
};

export default MenProductPage;