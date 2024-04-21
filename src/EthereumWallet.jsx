import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

function EthereumWallet() {
    const [currentAccount, setCurrentAccount] = useState(null);

    useEffect(() => {
        const checkIfWalletIsConnected = async () => {
            try {
                const { ethereum } = window;
                if (!ethereum) {
                    console.log('Make sure you have MetaMask!');
                    return;
                } else {
                    console.log('Ethereum object found:', ethereum);
                }

                const accounts = await ethereum.request({ method: 'eth_accounts' });
                if (accounts.length !== 0) {
                    const account = accounts[0];
                    console.log('Found an authorized account:', account);
                    setCurrentAccount(account);
                } else {
                    console.log('No authorized account found');
                }
            } catch (error) {
                console.error(error);
            }
        };

        checkIfWalletIsConnected();
    }, []);

    async function connectWallet() {
        try {
            const { ethereum } = window;
            if (!ethereum) {
                alert("Get MetaMask!");
                return;
            }
    
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log('Connected', accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {currentAccount ? (
                <h3>Connected Account: {currentAccount}</h3>
            ) : (
                <button onClick={connectWallet}>Connect Wallet</button>
            )}
        </div>
    );
}

export default EthereumWallet;
