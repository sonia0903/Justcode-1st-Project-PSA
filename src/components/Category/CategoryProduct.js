import React, { useState, useEffect } from 'react';
import css from './CategoryProduct.module.scss';

function CategoryProduct() {
  return (
    <div className={css.container}>
      {item.map(({ id, title, type, use, image_path }) => (
        <div className={css.containerWrapper} key={id}>
          <div className={css.mainContainer}>
            <img src={image_path} alt="상품이미지" />
            <div className={css.productName}>
              <h4>{title}</h4>
              <p className={css.productSize}>2 사이즈 / ₩47,000원부터</p>
              <div className={css.productWrap}>
                <div className={css.productType}>
                  <h2>피부 타입</h2>
                  <p>{type}</p>
                </div>
                <div className={css.productUse}>
                  <h2>사용감</h2>
                  <p>{use}</p>
                </div>
              </div>
            </div>
          </div>
          <button className={css.addCartButton}>
            <span className={css.addCart}>카트에 추가하기 — ₩47,000</span>
          </button>
        </div>
      ))}
    </div>
  );
}
export default CategoryProduct;
