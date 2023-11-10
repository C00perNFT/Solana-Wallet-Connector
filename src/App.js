import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import '@solana/wallet-adapter-react-ui/styles.css';

const wallet = new PhantomWalletAdapter();

const App = () => {
  return (
    <ConnectionProvider endpoint="https://api.mainnet-beta.solana.com/">
      <WalletProvider wallets={[wallet]} autoConnect>
        <WalletModalProvider>
          <div className="App">
            <WalletMultiButton className="my-wallet-button" />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;
