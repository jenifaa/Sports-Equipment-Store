import { useEffect, useState } from "react";
import EquipmentCard from "./EquipmentCard";

const EquipmentCards = () => {
  const [equipments, setEquipments] = useState([]);
  const [activeTab, setActiveTab] = useState(equipments[0])
  useEffect(() => {
    fetch("http://localhost:5000/equipment")
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
      });
  }, []);
  return (
    <div>
      {/* <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Tab 1
        </a>
        <a role="tab" className="tab tab-active">
          Tab 2
        </a>
        <a role="tab" className="tab">
          Tab 3
        </a>
      </div> */}



      <div role="tablist" className="tabs tabs-lifted">
      {equipments.map((equipment, index) => (
        <a
          key={index}
          role="tab"
          className={`tab ${activeTab === equipment ? 'tab-active' : ''}`}
          onClick={() => setActiveTab(equipment)} // Set the active tab on click
        >
          {equipment.category}
        </a>
      ))}
    </div>


{/* <div role="tablist" className="tabs tabs-lifted ">
        <a
          role="tab"
          className={`tab ${activeTab === category ? "tab-active" : ""}`}
          onClick={() => setActiveTab(category)} // Set the active tab on click
        >
          {category}
        </a>
      </div> */}


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-5 my-10">
        {equipments.map((equipment) => (
          <EquipmentCard
            key={equipment._id}
            equipment={equipment}
          ></EquipmentCard>
        ))}
      </div>
    </div>
  );
};

export default EquipmentCards;
