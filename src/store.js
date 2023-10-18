import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './features/cart/CartSlice';
import userReducer from './features/cart/user/UserSlice';

export const store = configureStore({
	reducer: {
		userState: userReducer,
		cartState: cartReducer,
	},
});
