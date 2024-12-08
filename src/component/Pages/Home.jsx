import Banner from "./Banner";

import EquipmentCards from "./EquipmentCards";
import FamousEquipment from "./FamousEquipment";
import Loading from "./Loading";

import Reaction from "./Reaction";
const Home = () => {
    
  return (
    <div className="">
     <div className="bg-base-200">
     <Banner></Banner>

     </div>
     <EquipmentCards></EquipmentCards>
     
     
     <FamousEquipment></FamousEquipment>
    
     
     <Reaction></Reaction>
    </div>
  );
};

export default Home;
