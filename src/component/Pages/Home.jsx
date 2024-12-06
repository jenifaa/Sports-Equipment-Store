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
// style={{
//     backgroundImage: 'url("https://i.ibb.co.com/pWkQzH7/banner.webp")', 
//     backgroundSize: 'cover', 
//     backgroundPosition: 'center', 
//     height: '100vh', 
//     width: '100%' ,
//     opacity: '5%'