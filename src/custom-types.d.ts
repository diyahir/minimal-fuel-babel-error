interface FuelWallet {
  // Define the properties and methods of your Fuel wallet here
  address: string;
  // Add other properties and methods as needed
}

declare global {
  interface Window {
    fuel?: {
      getWallet: (address: string) => Promise<any>;
      // other properties and methods as needed
      assets: any;
      addAssets: any;
    };
  }
}

export {};
