import { useNavigate } from "react-router-dom";

const ButtonCategory = () => {
  const navigate = useNavigate();
  const goToMenProduct = () => {
    navigate("/");
  };

  const goToWomenProduct = () => {
    navigate("/women");
  };

  return (
    <div className="button_sex">
      <button onClick={goToMenProduct} className="male-button">
        남성
      </button>
      <button onClick={goToWomenProduct} className="female-button">
        여성
      </button>
    </div>
  );
};

export default ButtonCategory;
