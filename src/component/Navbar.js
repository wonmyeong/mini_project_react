import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Container } from "react-bootstrap";

const Navbar = () => {
  const nav_bar_list = ["랭킹", "업데이트", "코디", "세일", "스폐셜", "매거진"];

  return (
    <div className="nav-bar">
      <div class="right-part">
        <img src="https://wowtale.s3.ap-northeast-2.amazonaws.com/wp-content/uploads/2022/03/24025139/wowtale.net---1-2.jpg" />
        <input type="text" placeholder="search" />
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      </div>
      <ul>
        {nav_bar_list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
