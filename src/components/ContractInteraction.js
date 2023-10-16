// ContractInteraction.js
// Import the contract ABI
//import SimpleStorage from "../../Project/build/contracts/SimpleStorage.json";
import React, { useEffect, useState } from "react";
import Web3 from "web3";
//import YourContractABI from "./build/contracts/SimpleStorage.json"; // Update with the correct path // Update with the correct path
//import abi from "./build/contracts/SimpleStorage.json";
//import contractAddress from "./build/contract/SimpleStorage.json";
// Unused variable
// eslint-disable-next-line
//import SimpleStorage from "./build/contracts/SimpleStorage.json";

const YourContractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    name: "StorageSet",
    type: "event",
  },
  {
    inputs: [],
    name: "storedData",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "x",
        type: "uint256",
      },
    ],
    name: "set",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]; // Your ABI goes here
const contractAddress = "0xDc8C41165074B80E05690e27278b166b62B2fe4d";
//const SimpleStorage = new web3.eth.Contract(YourContractABI, contractAddress);

const ContractInteraction = () => {
  const [contract, setContract] = useState(null);
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    const initContract = async () => {
      const web3 = new Web3(
        "https://eth-sepolia.g.alchemy.com/v2/Qv6nUkNiBIUItc_c1ooIVXNLwxaT_wvj"
      );
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = YourContractABI.networks[networkId];
      const instance = new web3.eth.Contract(
        YourContractABI.abi,
        deployedNetwork && deployedNetwork.address
      );
      setContract(instance);
    };

    initContract();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (contract) {
        const data = await contract.methods.storedData().call();
        setStoredData(data);
      }
    };

    fetchData();
  }, [contract]);

  return (
    <div>
      {/* Your contract interaction UI or calls go here */}
      <p>Stored Data: {storedData}</p>
    </div>
  );
};

export default ContractInteraction;
