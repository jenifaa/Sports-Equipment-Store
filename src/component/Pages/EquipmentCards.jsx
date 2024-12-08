import { useEffect, useState } from "react";
import EquipmentCard from "./EquipmentCard";

const EquipmentCards = () => {
  const [equipments, setEquipments] = useState([]); 
  const [filteredEquipments, setFilteredEquipments] = useState([]); 
  const [categories, setCategories] = useState([]); 
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    fetch("https://equipment-store-server.vercel.app/equipment")
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
  //     setFilteredEquipments(equipments);
  //   } else {
  //     const filtered = equipments.filter((equipment) => equipment.category === category);
  //     setFilteredEquipments(filtered); 
  //   }
  // };
  return (
    <div className="">
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
    <div role="tablist" className="tabs tabs-lifted mb-5">
        {categories.map((category, index) => (
          <a
            key={index}
            role="tab"
            className={`tab text-xl ${
              activeTab === category ? "tab-active font-bold text-xl" : ""
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </a>
        ))}
      </div>

      <div className="bg-base-200 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-9/12 mx-auto gap-5 my-10">
        {equipments.map((equipment) => (
          <EquipmentCard
            key={equipment._id}
            equipment={equipment}
          ></EquipmentCard>
        ))}
      </div>
      </div>
    </div>
  );
};

export default EquipmentCards;
