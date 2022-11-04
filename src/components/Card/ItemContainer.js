import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard/ItemCard';
import 'src/components/Card/ItemContainer.module.scss';

function ItemContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/data/ItemDetail.json')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  return (
    <div>
      <div className="app-container">
        {items.map(props => {
          return (
            <ItemCard
              key={props.id}
              title={props.title}
              image_path={props.image_path}
              type={props.type}
              use={props.use}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ItemContainer;
