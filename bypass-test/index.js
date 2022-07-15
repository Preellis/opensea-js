const Web3 = require("web3");
const { OpenSeaSDK } = require("../lib/index");

const provider = new Web3.providers.HttpProvider(
  "https://mainnet.infura.io/v3/8e91fe6e48f84c82974229bd0fab386c"
);

const openseaSDK = new OpenSeaSDK(provider, {
  apiKey: "",
});

const test = async () => {
  const { orders } = await openseaSDK.api.getOrders({
    assetContractAddress: "0x82f8b200758d2a5cd5d584e8ee06e4182526b0ae",
    tokenId: 1,
    side: "bid",
  });

  console.log(orders);

  const res = await openseaSDK.api.getOrder({
    assetContractAddress: "0x82f8b200758d2a5cd5d584e8ee06e4182526b0ae",
    tokenId: 1,
    side: "bid",
  });

  console.log(res.currentPrice);
};

setInterval(async () => {
  await test();
}, 1000);
