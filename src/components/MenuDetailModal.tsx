import React, { useState } from 'react';
import type { MenuItem } from '../data/menu';
import './MenuDetailModal.css';

interface MenuDetailModalProps {
  item: MenuItem;
  onClose: () => void;
}

const MenuDetailModal: React.FC<MenuDetailModalProps> = ({ item, onClose }) => {
  const [selectedAddOns, setSelectedAddOns] = useState<Set<string>>(new Set());

  const toggleAddOn = (id: string) => {
    const newSet = new Set(selectedAddOns);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setSelectedAddOns(newSet);
  };

  const totalPrice = item.price + (item.addOns || []).reduce((acc, addOn) => {
    return selectedAddOns.has(addOn.id) ? acc + addOn.price : acc;
  }, 0);

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

            {item.addOns && item.addOns.length > 0 && (
              <div className="addons-section">
                <h3>Add-ons</h3>
                <ul className="addons-list">
                  {item.addOns.map(addon => (
                    <li key={addon.id} className="addon-item" onClick={() => toggleAddOn(addon.id)}>
                      <label className="checkbox-container">
                        <input
                          type="checkbox"
                          checked={selectedAddOns.has(addon.id)}
                          readOnly
                        />
                        <span className="checkmark"></span>
                        <span className="addon-name">{addon.name}</span>
                      </label>
                      <span className="addon-price">
                        {addon.price > 0 ? `+$${addon.price.toFixed(2)}` : 'Free'}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <div className="total-price">
            <span>Total: </span>
            <strong>${totalPrice.toFixed(2)}</strong>
          </div>
          <button className="btn-primary" onClick={onClose}>Add to Order</button>
        </div>
      </div>
    </div>
  );
};

export default MenuDetailModal;
