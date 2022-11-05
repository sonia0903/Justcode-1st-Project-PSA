import React, { useState, useEffect } from 'react';
import css from './CategoryProductList.module.scss';

function CategoryProductList() {
  const [item, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/CategoryProduct.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.content);
      });
  }, []);
}
