import './App.css';
import EthereumWallet from './EthereumWallet';
import { SignProtocolClient, SpMode, EvmChains, } from '@ethsign/sp-sdk';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <EthereumWallet />
          Click button to sign attestation
        </p>
        <a
          className="App-link"
          onClick={async () => {
            console.log(EvmChains.polygonMumbai)
            // create client
            const client = new SignProtocolClient(SpMode.OnChain, {
              chain: EvmChains.polygon,
            });            
            const entity = '0xbbfa35aAF0fc2DF907E828795718Acb319fE1dD9'
            // create attestation
            const createAttestationRes = await client.createAttestation({
              schemaId: '0x17',
              data: { 
                location: 'ETH Global 2024', 
                entity: entity 
              },
              indexingValue: entity.toLowerCase(),
            });
          }}
        >SIGN</a>
      </header>
    </div>
  );
}

export default App;
