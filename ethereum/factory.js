import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x734B1A17398ab420D552F2304Be3d2C2E3B67716"
);

export default instance;
