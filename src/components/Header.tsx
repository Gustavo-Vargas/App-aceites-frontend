import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

export default function Header() {
	return (
		<div className="border-b-2 border-b-lightgray bg-darkgreen py-6">
			<div className="container mx-auto flex justify-between items-center">
				<Link to="/" className="text-3xl font-bold tracking-tight text-white">
					AppAceites.com
				</Link>

				<div className="hidden md:block ">
					<div className="flex gap-5">
						<Link
							to="/productos"
							className="text-xl font-bold hover:text-white hover:bg-darkgreen"
						>
							Productos
						</Link>
						<Link
							to="/nosotros"
							className="text-xl font-bold hover:text-white hover:bg-darkgreen"
						>
							Nosotros
						</Link>
						<Link
							to="/contacto"
							className="text-xl font-bold hover:text-white hover:bg-darkgreen"
						>
							Contacto
						</Link>
					</div>
				</div>

				<div className="md:hidden">
					<MobileNav />
				</div>
				<div className="hidden md:block">
					<MainNav />
				</div>
			</div>
		</div>
	);
}
