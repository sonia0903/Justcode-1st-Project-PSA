import React from 'react';
import css from './ProductDetail.module.scss';
import CategoryProductList from '../../components/Category/CategoryProductList';

function ProductDetail() {
  return (
    <div className={css.container}>
      <CategoryProductList />
      <div className={css.serviceWrapper}>
        <div className={css.service}>
          <h4>무료 선물 포장 서비스</h4>
          <p>주문하신 모든 제품에 대해 선물 포장 서비스를 제공해 드립니다.</p>
        </div>
        <div className={css.present}>
          <h4>샘플 & 코튼 백 증정</h4>
          <p>
            모든 주문 건에 무료 샘플과 코튼 백을 제공해 드립니다. (샘플 종류는
            임의 지정이 불가합니다.)
          </p>
        </div>
      </div>
      <div className={css.imageWrapper}>
        <div className={css.leftContainer}>
          <img
            src="https://www.aesop.com/u1nb1km7t5q7/5p8HTAsan1kAf7lvy3mglz/927167c016a3c8b8639f46f9352b6721/Aesop-Skin-Parsley-Seed-Facial-Toner-Texture-1440x1800.jpg"
            alt="왼쪽 이미지"
          />
          <div className={css.text}>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
