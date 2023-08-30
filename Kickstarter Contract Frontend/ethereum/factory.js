import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xd3764a0590C2F70F1Ec65f1CBD49c1c715A7A236'
);

export default instance;
