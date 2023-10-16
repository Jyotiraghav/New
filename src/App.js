import React, { useEffect, useState } from "react";
import Web3 from "web3";
//import SimpleStorage from "../../Project/build/contracts/SimpleStorage.json";
import SimpleStorage from "./SimpleStorage.json";

function App() {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  //const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        // Modern dapp browsers...
        if (window.ethereum) {
          const _web3 = new Web3(
            "https://eth-sepolia.g.alchemy.com/v2/Qv6nUkNiBIUItc_c1ooIVXNLwxaT_wvj"
          );
          await window.ethereum.enable();
          setWeb3(_web3);
        }
        // Legacy dapp browsers...
        else if (window.web3) {
          //const _web3 = new Web3(window.web3.currentProvider);
          const _web3 = new Web3(
            window.ethereum || window.web3.currentProvider
          );

          setWeb3(_web3);
        }
        // Non-dapp browsers...
        else {
          console.log(
            "MetaMask is not installed. Please install it to interact with the blockchain."
          );
          return;
        }

        //const _accounts = await web3.eth.getAccounts();
        //setAccounts(_accounts);
        // const networkId = await web3.eth.net.getId();
        const deployedNetwork = SimpleStorage.networks[11155111];
        const _contract = new web3.eth.Contract(
          SimpleStorage.abi,
          deployedNetwork && deployedNetwork.address
        );
        setContract(_contract);
      } catch (error) {
        console.error("Error during initialization:", error);
      }
    };

    initWeb3();
  }, []); // Added dependency to avoid unnecessary calls

  return (
    <div className="App">
      <h1>Welcome to the Home Page!</h1>
      <p>Stored Data: {contract && contract.methods.storedData().call()}</p>
      {/* Additional UI or calls related to your contract can go here */}
    </div>
  );
}

export default App;
