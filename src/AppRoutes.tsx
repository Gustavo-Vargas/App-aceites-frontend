import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import HomePages from "./pages/HomePages";
import AuthCallBackPage from "./pages/AuthCallBack";

import NosotrosPage from "./pages/NosotrosPage";
import ContactoPage from "./pages/ContactoPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";

const AppRoutes = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<Layout showHero={true}>
						<HomePages />
					</Layout>
				}
			/>

			<Route path="/auth-callback" element={<AuthCallBackPage />} />

			<Route path="/productos" element={<span>Product Page</span>} />

			<Route
				path="/nosotros"
				element={
					<Layout>
						<NosotrosPage />
					</Layout>
				}
			/>
			<Route
				path="/contacto"
				element={
					<Layout>
						<ContactoPage />
					</Layout>
				}
			/>

			<Route path="/carrito" element={<span>Carrito Page</span>} />

			{/* Protección de rutas */}
			<Route element={<ProtectedRoute />}>
				<Route
					path="/user-profile"
					element={
						<Layout>
							<UserProfilePage />
						</Layout>
					}
				/>

				<Route
					path="/manage-product"
					element={<span>Manage Product Page</span>}
				/>
				<Route
					path="/manage-category"
					element={<span>Manage Category Page</span>}
				/>
			</Route>
			
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default AppRoutes;
