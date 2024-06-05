import { useAuth0 } from "@auth0/auth0-react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

export default function UserNameMenu() {
	const { user, logout } = useAuth0();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex px-3 font-bold hover:text-white gap-2">
				<CircleUserRound className="text-white" />
				{user?.email}
			</DropdownMenuTrigger>

			<DropdownMenuContent className="bg-cream border rounded-md shadow-md">
				<DropdownMenuItem className="p-2">
					<Link
						to="/user-profile"
						className="font-bold text-darkgreen hover:text-earthbrown "
					>
						Perfil
					</Link>
				</DropdownMenuItem>
				<Separator className="my-1 bg-darkgreen" />

				<DropdownMenuItem className="p-2">
					<Button
						className="w-full font-bold  text-white hover:bg-earthbrown"
						onClick={() => logout()}
					>
						Salir
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
