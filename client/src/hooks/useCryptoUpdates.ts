import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateCryptoPrices } from '@/store/cryptoSlice';

export default function useCryptoUpdates(interval = 2000) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulate websocket connection by updating prices at regular intervals
    const intervalId = setInterval(() => {
      dispatch(updateCryptoPrices());
    }, interval);

    // Cleanup on unmount
    return () => clearInterval(intervalId);
  }, [dispatch, interval]);
}
