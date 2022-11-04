import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ItemCard({ title, image_path, type, use }) {
  const navigate = useNavigate();
  const openDatail = () => {
    navigate('');
  };

  // const { title } = useParams;
  // const { category } = useLocation;
  // 제이솝/category/title

  return (
    <div className="toner-container" onClick={openDatail}>
      <img src={image_path} alt="상품이미지" />
      <div className="toner-info">
        <h4>{title}</h4>
        <p class="Product-price">2 사이즈 / ₩47,000원부터</p>
        <div class="Product-detail-wrapper">
          <div class="type">
            <h2>피부 타입</h2>
            <p>{type}</p>
          </div>
          <div class="use">
            <h2>사용감</h2>
            <p>{use}</p>
          </div>
        </div>
        <button class="Add-to-cart-button" type="button">
          <span class="Add-to-cart-price">카트에 추가하기 — ₩47,000</span>
        </button>
      </div>
    </div>
  );
}
