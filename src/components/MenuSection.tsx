import React, { useState } from 'react';
import { menuData } from '../data/menu';
import type { MenuItem } from '../data/menu';
import MenuCard from './MenuCard';
import MenuDetailModal from './MenuDetailModal';
import './MenuSection.css';

const categories = ['All', 'Thai', 'National', 'Appetizer', 'Drink & Dessert'];

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredMenu = activeCategory === 'All'
    ? menuData
    : menuData.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding menu-section">
      <div className="container">
        <div className="menu-header text-center">
          <h2>Our Menu</h2>
          <div className="menu-filters">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-grid">
          {filteredMenu.map(item => (
            <MenuCard key={item.id} item={item} onClick={setSelectedItem} />
          ))}
        </div>
      </div>

      {selectedItem && (
        <MenuDetailModal
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </section>
  );
};

export default MenuSection;
