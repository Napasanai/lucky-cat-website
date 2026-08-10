import React from 'react';
import type { MenuItem } from '../data/menu';
import './MenuCard.css';

interface MenuCardProps {
  item: MenuItem;
  onClick: (item: MenuItem) => void;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, onClick }) => {
  return (
    <div className="menu-card" onClick={() => onClick(item)}>
      <div className="menu-card-image" style={{ backgroundImage: `url(${item.image})` }}>
        <div className="menu-card-badge">{item.category}</div>
      </div>
      <div className="menu-card-content">
        <h3>{item.name}</h3>
        <p className="menu-card-desc">{item.description}</p>
        <div className="menu-card-footer">
          <span className="menu-card-price">${item.price.toFixed(2)}</span>
          <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
            <i className="ti ti-plus"></i> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
