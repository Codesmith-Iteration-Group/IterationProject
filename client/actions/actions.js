import axios from 'axios';
import * as types from '../constants/actionTypes';

// export const syncMarkets = () => (dispatch, getState) => {
//     axios.put('/markets', getState().markets.marketList)
//       .then(({ status }) => {
//         if (status === 200) dispatch({ type: types.SYNC_MARKETS });
//       })
//       .catch(console.error);
//   };