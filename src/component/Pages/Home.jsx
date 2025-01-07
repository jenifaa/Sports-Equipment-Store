
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";

import EquipmentCards from "./EquipmentCards";
import FamousEquipment from "./FamousEquipment";
import Loading from "./Loading";

import Reaction from "./Reaction";
import FAQ from "./Home/FAQ";
import DownLoad from "../routes/DownLoad";
import OurPartner from "../routes/OurPartner";
const Home = () => {
    
  return (
    <div className="">
      <Helmet>
        <title>SportZone</title>
      </Helmet>
     <div className="bg-base-200">
     <Banner></Banner>

     </div>
      <EquipmentCards></EquipmentCards>
     
     
     <FamousEquipment></FamousEquipment>
     <FAQ></FAQ>
    
     
     <Reaction></Reaction> 
     <OurPartner></OurPartner>
     <DownLoad></DownLoad>
    </div>
  );
};

export default Home;
