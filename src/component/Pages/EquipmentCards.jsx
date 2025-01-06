import { useEffect, useState } from "react";
import EquipmentCard from "./EquipmentCard";

const EquipmentCards = () => {
  const [equipments, setEquipments] = useState([]);
  const [filteredEquipments, setFilteredEquipments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    fetch("https://equipment-store-server.vercel.app/homeEquipment")
      .then((res) => res.json())
      .then((data) => {
        setEquipments(data);
        setFilteredEquipments(data);
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      });
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);

    if (category === "All" || !category) {
      setFilteredEquipments(equipments);
    } else {
      const filtered = equipments.filter(
        (equipment) => equipment.category === category
      );
      setFilteredEquipments(filtered);
    }
  };

  return (
    <div className="bg-base-300 pt-16">
      <p className="text-sm text-orange-600 text-center mb-2">
        -- buy your desire products
      </p>
      <h2 className="text-6xl mb-5  font font-bold text-center">
        Our Equipments
      </h2>
      <p className="text-center font-semibold text-gray-500 text-sm mb-10">
        Explore our diverse collection of high-quality equipment designed to
        meet all your needs. Whether you're a professional or a hobbyist,
        <br /> we have the perfect tools to help you succeed.
      </p>

      <div className="flex justify-center items-center md:flex-row flex-col gap-3 md:gap-10 md:py-10">
        <button
          className={`text-xl px-5 py-3 rounded-md ${
            activeTab === "All"
              ? "font-bold text-white bg-[#282222]"
              : "text-white bg-[#5C4E4E]"
          }`}
          onClick={() => handleTabClick("All")}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`text-xl px-5 py-3 rounded-md ${
              activeTab === category
                ? "font-bold text-white bg-[#282222]"
                : "text-white bg-[#5C4E4E]"
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-14 gap-16 my-10">
          {filteredEquipments.length > 0 ? (
            filteredEquipments.map((equipment) => (
              <EquipmentCard key={equipment._id} equipment={equipment} />
            ))
          ) : (
            <p className="text-center col-span-4">
              No items found for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EquipmentCards;
