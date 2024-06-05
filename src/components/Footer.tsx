export default function Footer() {
	return (
		<div className="bg-darkgreen py-10">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<span className="text-3xl text-white font-bold tracking-tight">
					AppAceites.com
				</span>
				<span className="text-white font-bold tracking-tight flex gap-4">
					<span>Política de privacidad</span>
					<span>Términos de servicios</span>
				</span>
			</div>
		</div>
	);
}
