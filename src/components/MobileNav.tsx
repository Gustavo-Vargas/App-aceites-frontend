import { Separator } from "@radix-ui/react-dropdown-menu";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetTitle,
	SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

export default function MobileNav() {
	const { isAuthenticated, loginWithRedirect, user } = useAuth0();
	return (
		<Sheet>
			<SheetTrigger>
				<Menu className="text-sage" />
			</SheetTrigger>
			<SheetContent className="space-y-3 bg-cream">
				<SheetTitle>
					{isAuthenticated ? (
						<span>{user?.email}</span>
					) : (
						<span className="font-bold text-2xl text-darkgreen">
							Bienveindos a los Mejores Aceites Naturales
						</span>
					)}
				</SheetTitle>

				<Separator className="border-lightgray" />
				<SheetDescription className="flex flex-col gap-4">
					{isAuthenticated ? (
						<MobileNavLinks />
					) : (
						<Button
							onClick={() => loginWithRedirect()}
							className="flex-1 font-bold bg-earthbrown text-white"
						>
							LogIn
						</Button>
					)}
				</SheetDescription>
			</SheetContent>
		</Sheet>
	);
}
