import { useEffect, useState } from "react";
import EquipmentCard from "./EquipmentCard";

const EquipmentCards = () => {
  const [equipments, setEquipments] = useState([]); 
  const [filteredEquipments, setFilteredEquipments] = useState([]); 
  const [categories, setCategories] = useState([]); 
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/equipment")
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
        setFilteredEquipments(data); 
        const uniqueCategories = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCategories);
      });
  }, []);




  const handleTabClick = (category) => {
    setActiveTab(category); 
    const filtered = equipments.filter(
      (equipment) => equipment.category === category
    );
    setFilteredEquipments(filtered); 
  };

  // const handleTabClick = (category) => {
  //   setActiveTab(category);
  //   if (category === "All") {
  //     setFilteredEquipments(equipments); // Reset to all data
  //   } else {
  //     const filtered = equipments.filter((equipment) => equipment.category === category);
  //     setFilteredEquipments(filtered); // Display only selected category data
  //   }
  // };
  return (
    <div>
      {/* <div role="tablist" className="tabs tabs-lifted">
      {equipments.map((equipment, index) => (
        <a
          key={index}
          role="tab"
          className={`tab ${activeTab === equipment ? 'tab-active font-bold text-xl' : ''}`}
          onClick={() => setActiveTab(equipment)} // Set the active tab on click
        >
          {equipment.category}
        </a>
      ))}
    </div> */}
    <div role="tablist" className="tabs tabs-lifted">
        {categories.map((category, index) => (
          <a
            key={index}
            role="tab"
            className={`tab ${
              activeTab === category ? "tab-active font-bold text-xl" : ""
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </a>
        ))}
      </div>

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
