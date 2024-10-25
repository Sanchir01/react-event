import { Provider } from "react-redux";
import { Bounce, ToastContainer } from "react-toastify";
import { store } from "~/app/store";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from 'react-router-dom'
import { router } from '~/shared/routes'
const Providers = () => {
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
<RouterProvider router={router}/>
		</Provider>
	);
};

export default Providers;
