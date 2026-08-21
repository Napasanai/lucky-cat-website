import React, { useState } from 'react';
import type { MenuItem, AddOnType } from '../data/menu';
import { useCart } from '../context/CartContext';
import './MenuDetailModal.css';

interface MenuDetailModalProps {
  item: MenuItem;
  onClose: () => void;
}

const MenuDetailModal: React.FC<MenuDetailModalProps> = ({ item, onClose }) => {
  const { addToCart } = useCart();
  // Map of groupId -> Set of selected option IDs
  const [selectedOptions, setSelectedOptions] = useState<Record<string, Set<string>>>({});

  const toggleOption = (groupId: string, optionId: string, type: AddOnType) => {
    setSelectedOptions(prev => {
      const groupSelections = new Set(prev[groupId] || []);
      
      if (type === 'radio') {
        groupSelections.clear();
        groupSelections.add(optionId);
      } else {
        if (groupSelections.has(optionId)) {
          groupSelections.delete(optionId);
        } else {
          groupSelections.add(optionId);
        }
      }
      
      return { ...prev, [groupId]: groupSelections };
    });
  };

  let addOnsTotal = 0;
  if (item.addOnGroups) {
    item.addOnGroups.forEach(group => {
      const selections = selectedOptions[group.id] || new Set();
      group.options.forEach(opt => {
        if (selections.has(opt.id)) {
          addOnsTotal += opt.price;
        }
      });
    });
  }
  
  const totalPrice = item.price + addOnsTotal;

  const handleAddToOrder = () => {
    addToCart(item, selectedOptions);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <i className="ti ti-x"></i>
        </button>

        <div className="modal-scroll-area">
          <div className="modal-image" style={{ backgroundImage: `url(${item.image})` }}></div>

          <div className="modal-body">
            <h2>{item.name}</h2>
            <p className="modal-desc">{item.description}</p>

            {item.addOnGroups && item.addOnGroups.map(group => (
              <div key={group.id} className="addons-section">
                <h3>{group.name}</h3>
                <ul className="addons-list">
                  {group.options.map(option => {
                    const isSelected = (selectedOptions[group.id] || new Set()).has(option.id);
                    return (
                      <li key={option.id} className="addon-item" onClick={() => toggleOption(group.id, option.id, group.type)}>
                        <label className="checkbox-container">
                          {group.type === 'radio' ? (
                            <input
                              type="radio"
                              name={group.id}
                              checked={isSelected}
                              readOnly
                              style={{ borderRadius: '50%' }}
                            />
                          ) : (
                            <input
                              type="checkbox"
                              checked={isSelected}
                              readOnly
                            />
                          )}
                          <span className={group.type === 'radio' ? 'radiomark' : 'checkmark'}></span>
                          <span className="addon-name">{option.name}</span>
                        </label>
                        <span className="addon-price">
                          {option.price > 0 ? `+$${option.price.toFixed(2)}` : 'Free'}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <div className="total-price">
            <span>Total: </span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <button className="btn-primary" onClick={handleAddToOrder}>Add to Order</button>
        </div>
      </div>
    </div>
  );
};

export default MenuDetailModal;
