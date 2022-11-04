import React, { useState, useEffect } from 'react';
import css from 'src/components/ItemDetail/ItemDetail.module.scss';

function CardDetail() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/ItemDetail.json')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  return (
    <>

{items.map(({ id, title, description, type, use, ingredient, size, image_path }) => (
<div className={css.Product-content-wrapper} key={item.id}>

<div className={css.Product-left-image}>
  <picture className={css.Image-wrapper}>
    <img
      alt="상품이미지"
      src={image_path}
  /></picture>
</div>

<div className={css.Product-right-description}>
  <div className={css.Product-right-description-wrapper}>
    <nav className={css.Product-detail-category}>
      <ul>
        <li className={css.Product-detail-first-category}>
        <a className="" href="#" target="_self">스킨</a>
        </li>
        <li>·</li>
        <li className={css.Product-detail-second-category}>
          <a className="" href="#" target="_self">토너</a>
        </li>
      </ul>
    </nav>
    
    <header className={css.ProductName}>
      <h1 className={css.Product-title}>{title}</h1>
      <p className={css.Product-description}>
        {description}
      </p>
    </header>
    <div className={css.Product-detail-wrapper}>
      <div className={css.type}>
        <h2>피부 타입</h2>
        <p>{type}</p>
      </div>
      <div className={css.use}>
        <h2>사용감</h2>
        <p>{use}</p>
      </div>
      <div className={css.ingredient}>
        <h2>주요 성분</h2>
        <p>{ingredient}</p>
        <div className={css.ingredient-plus-button}>
          
          <i className={css.fa-circle-plus}></i
          >
        </div>
      </div>
    </div>
    <div className={css.Product-size-select}>
      <h2>사이즈</h2>
      <ul>
        <li className="">
          <label className={css.Radio-button}
            ><input className={css.Radio-input} name="size" type="radio" /><span
              className={css.Radio-content}
              >{size[0]}ml</span
            ></label
          >
        </li>
        <li className="">
          <label className={css.Radio-buton}
            ><input className={css.Radio-input} name="size" type="radio" /><span
              className={css.Radio-content}
              >{size[1]}</span
            ></label
          >
        </li>
      </ul>
      <button className={css.Add-to-cart-button} type="button">
        <span className={css.Add-to-cart-price}>카트에 추가하기 — ₩47,000</span>
      </button>
    </div>
    ))}
  </div>
</div>
</div>

</>
)



  }


export default CardDetail;
