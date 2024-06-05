import contact from "@/assets/Contact_Us.png";
import service from "@/assets/customerService.png";
import bruce from "@/assets/bruce.jpg";
import wesker from "@/assets/wesker.jpg";
import { Separator } from "@/components/ui/separator";

export default function ContactoPage() {
	return (
		<div className="bg-sage min-h-screen flex flex-col items-center py-10 px-4 md:px-8">
			<div className="bg-cream w-full max-w-4xl rounded-lg shadow-lg p-6 md:p-10">
				<h1 className="text-4xl font-bold text-center text-earthbrown mb-8">
					Nosotros
				</h1>

				<Separator className="bg-earthbrown  mb-5" />

				<section className="mb-12">
					<h2 className="text-2xl font-semibold text-darkgreen mb-4">
						Contacto
					</h2>
					<p className="text-lg text-earthbrown mb-4">
						Puedes contactarnos a través de los siguientes medios:
					</p>
					<ul className="list-disc list-inside text-lg text-earthbrown mb-4">
						<li>
							Email:{" "}
							<a className="text-darkgreen underline">info@appaceites.com</a>
						</li>
						<li>
							Teléfono:{" "}
							<a className="text-darkgreen underline">+123 456 7890</a>
						</li>
						<li>Dirección: Calle Falsa 123, Ciudad, País</li>
					</ul>
					<div className="flex justify-center">
						<img
							src={contact}
							alt="Contact Us"
							className="w-full max-h-60 object-cover rounded-lg shadow-md"
						/>
					</div>
				</section>

				<Separator className="bg-earthbrown  mb-5" />

				<section className="mb-12">
					<h2 className="text-2xl font-semibold text-darkgreen mb-4">
						Atención al Cliente
					</h2>
					<p className="text-lg text-earthbrown mb-4">
						Nuestro equipo de atención al cliente está disponible para ayudarte
						en lo que necesites. Puedes comunicarte con nosotros durante los
						siguientes horarios:
					</p>
					<ul className="list-disc list-inside text-lg text-earthbrown mb-4">
						<li>Lunes a Viernes: 9:00 AM - 6:00 PM</li>
						<li>Sábados: 10:00 AM - 2:00 PM</li>
						<li>Domingos y Festivos: Cerrado</li>
					</ul>
					<div className="flex justify-center">
						<img
							src={service}
							alt="Customer Service"
							className="w-full max-h-60 object-cover rounded-lg shadow-md"
						/>
					</div>
				</section>

				<Separator className="bg-earthbrown  mb-5" />

				<section>
					<h2 className="text-2xl font-semibold text-darkgreen mb-4">
						Nuestro Equipo
					</h2>
					<p className="text-lg text-earthbrown mb-4">
						Conoce a las personas que hacen posible nuestro éxito:
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="flex flex-col items-center">
							<img
								src={bruce}
								alt="Team Member 1"
								className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"
							/>
							<h3 className="text-xl font-semibold text-earthbrown">
								Bruce Wayne
							</h3>
							<p className="text-darkgreen">CEO & Fundador</p>
						</div>
						<div className="flex flex-col items-center">
							<img
								src={wesker}
								alt="Team Member 2"
								className="w-32 h-32 object-cover rounded-full mb-4 shadow-md"
							/>
							<h3 className="text-xl font-semibold text-earthbrown">
								Alber Wesker
							</h3>
							<p className="text-darkgreen">Directora de Marketing</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
