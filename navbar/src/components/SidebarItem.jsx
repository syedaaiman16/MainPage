import { useState } from "react";

export default function SidebarItem({ item}) {
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
    // You can add additional logic here based on the checkbox state
  };

  return (
    <div className={isChecked ? "sidebar-item checked" : "sidebar-item"}>
      <div className="sidebar-title">
        {item.title}
        {item.childrens && <hr className="title-divider" />}
      </div>
      {item.childrens &&
        item.childrens.map((child, index) => (
          <div key={index} className="sidebar-child">
             <label className="checkbox-container">
        <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
        <span className="checkmark"></span>
      </label>
            <SidebarItem item={child} />
          </div>
        ))}
    </div>
  );
}



