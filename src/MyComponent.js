import React, { useEffect } from "react";
import Web3 from "web3";

const contractABI = [
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
]; // Replace with actual ABI
const contractAddress = "0xDc8C41165074B80E05690e27278b166b62B2fe4d"; // Replace with actual address

function MyComponent() {
  useEffect(() => {
    const web3 = new Web3(window.ethereum);
    const simpleStorageContract = new web3.eth.Contract(
      contractABI,
      contractAddress
    );
    // Contract interactions here...
  }, []);
  return <div>{/* Component JSX */}</div>;
}
export default MyComponent;
