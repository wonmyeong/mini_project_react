import { useNavigate } from "react-router-dom";

const ButtonCategory = () => {
  const navigate = useNavigate();
  const goToMenProduct = () => {
    navigate("/women_product");
  };

  return (
    <div className="button_sex">
      <button className="male-button">남성</button>
      <button onClick={goToMenProduct} className="female-button">
        여성
      </button>
    </div>
  );
};

export default ButtonCategory;
