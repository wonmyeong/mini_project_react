import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductCard = ({ product, image_url }) => {
  console.log(product);
  console.log("https://image.msscdn.net" + image_url);
  return (
    <div className="prod-box">
      <img className="prod-img" src={"https:" + image_url} />
      <div className="prod_info">
        <div className="brand-name">{product?.brand_name}</div>
        <div className="">{product?.product_name}</div>
        <div class="price-info">
          <div>
            {" "}
            {product?.after_discount ? (
              <del>￦{product.before_discount}</del>
            ) : (
              <div>￦{product.before_discount}</div>
            )}
          </div>
          <FontAwesomeIcon icon={faArrowRight} />
          <div>￦{product?.after_discount ? product.after_discount : ""}</div>
        </div>
        <div className="discount_rating">SALE {product?.discount_percent}%</div>
        {product?.reasonable_choice ? (
          <div
            className={
              product?.super_discount ? "reasonable_choice" : "normal_choice"
            }
          >
            알뜰쇼핑
          </div>
        ) : (
          ""
        )}
        {product?.super_discount ? (
          <div className="super_sale">슈퍼 세일</div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProductCard;
