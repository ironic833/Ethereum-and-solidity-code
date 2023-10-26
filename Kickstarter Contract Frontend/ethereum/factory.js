import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";
 
const instance = new web3.eth.Contract(

  CampaignFactory.abi,
  "0x3AFF8467Fc0c292f56211563819eE3594bdC995C"
  
);
 
export default instance;
