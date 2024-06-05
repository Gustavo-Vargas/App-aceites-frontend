import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRightFromLine } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLinks() {
	const { logout } = useAuth0();
	return (
		<>
			<Link
				to="/user-profile"
				className="flex font-bold items-center text-darkgreen hover:text-earthbrown "
			>
				Perfil
			</Link>
			<Button
				onClick={() => logout()}
				className="flex flex-items centre px-3 font-bold hover:text-orange-500"
			>
				<ArrowRightFromLine />
				Salir
			</Button>
		</>
	);
}
