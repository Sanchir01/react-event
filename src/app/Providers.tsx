import type React from "react";
import { Provider } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";
import { store } from "~/app/store";
import "react-toastify/dist/ReactToastify.css";
const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
			/>
			{children}
		</Provider>
	);
};

export default Providers;
