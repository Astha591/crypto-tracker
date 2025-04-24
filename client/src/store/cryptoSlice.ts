import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getRandomChange, getRandomPrice, getRandomVolume } from '@/lib/utils';

// Define chart data type
export interface ChartDataPoint {
  time: string;
  value: number;
}

// Define crypto asset type
export interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  logoUrl: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  chartData: ChartDataPoint[];
}

// Define state type
interface CryptoState {
  assets: CryptoAsset[];
  lastUpdated: string;
}

// Sample crypto chart data generator
const generateChartData = (basePrice: number): ChartDataPoint[] => {
  const data: ChartDataPoint[] = [];
  const now = new Date();
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    
    // Generate a random price variation between -10% and +10% of the base price
    const randomFactor = 0.9 + Math.random() * 0.2;
    const price = basePrice * randomFactor;
    
    data.push({
      time: date.toISOString().split('T')[0],
      value: price
    });
  }
  
  return data;
};

// Define initial state with sample data
const initialState: CryptoState = {
  assets: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      symbol: 'BTC',
      logoUrl: 'https://cryptologos.cc/logos/bitcoin-btc-logo.svg',
      price: 37245.65,
      change1h: 1.2,
      change24h: 4.7,
      change7d: -2.3,
      marketCap: 719500000000,
      volume24h: 24300000000,
      circulatingSupply: 19500000,
      maxSupply: 21000000,
      chartData: generateChartData(37245.65)
    },
    {
      id: 'ethereum',
      name: 'Ethereum',
      symbol: 'ETH',
      logoUrl: 'https://cryptologos.cc/logos/ethereum-eth-logo.svg',
      price: 1834.21,
      change1h: -0.8,
      change24h: 2.5,
      change7d: 6.1,
      marketCap: 220700000000,
      volume24h: 12500000000,
      circulatingSupply: 120200000,
      maxSupply: null,
      chartData: generateChartData(1834.21)
    },
    {
      id: 'tether',
      name: 'Tether',
      symbol: 'USDT',
      logoUrl: 'https://cryptologos.cc/logos/tether-usdt-logo.svg',
      price: 1.00,
      change1h: 0.01,
      change24h: -0.02,
      change7d: 0.01,
      marketCap: 82400000000,
      volume24h: 45100000000,
      circulatingSupply: 82400000000,
      maxSupply: null,
      chartData: generateChartData(1.00)
    },
    {
      id: 'bnb',
      name: 'BNB',
      symbol: 'BNB',
      logoUrl: 'https://cryptologos.cc/logos/bnb-bnb-logo.svg',
      price: 245.37,
      change1h: 1.5,
      change24h: 3.2,
      change7d: -0.7,
      marketCap: 41200000000,
      volume24h: 1500000000,
      circulatingSupply: 168137036,
      maxSupply: 200000000,
      chartData: generateChartData(245.37)
    },
    {
      id: 'solana',
      name: 'Solana',
      symbol: 'SOL',
      logoUrl: 'https://cryptologos.cc/logos/solana-sol-logo.svg',
      price: 44.89,
      change1h: -2.1,
      change24h: -5.6,
      change7d: 12.3,
      marketCap: 19800000000,
      volume24h: 2900000000,
      circulatingSupply: 441096426,
      maxSupply: null,
      chartData: generateChartData(44.89)
    }
  ],
  lastUpdated: new Date().toISOString()
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateCryptoPrices: (state) => {
      state.assets = state.assets.map(asset => ({
        ...asset,
        price: getRandomPrice(asset.price),
        change1h: getRandomChange(-1.5, 1.5),
        change24h: getRandomChange(-4, 4),
        change7d: getRandomChange(-8, 8),
        volume24h: getRandomVolume(asset.volume24h),
      }));
      state.lastUpdated = new Date().toISOString();
    }
  }
});

export const { updateCryptoPrices } = cryptoSlice.actions;
export default cryptoSlice.reducer;
