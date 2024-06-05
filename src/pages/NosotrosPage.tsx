import nosotros from "@/assets/nosotros.jpg"; 

export default function NosotrosPage() {
	return (
		<div className="bg-sage min-h-screen flex flex-col items-center py-10 px-4 md:px-8">
			<div className="bg-cream w-full max-w-4xl rounded-lg shadow-lg p-6 md:p-10">
				<h1 className="text-4xl font-bold text-center text-earthbrown mb-8">
					Nosotros
				</h1>

				<img
					src={nosotros}
					alt="Nosotros"
					className="w-full max-h-80 object-cover rounded-lg shadow-md mb-8"
				/>

				<section className="mb-12">
					<p className="text-lg text-earthbrown mb-4">
						Bienvenidos a “Aceites”, una empresa mexicana apasionada por mejorar
						la calidad de vida a través de la aromaterapia y el cuidado personal
						natural. Nuestra misión es simple pero poderosa: queremos que
						recuperes el poder sobre tu bienestar y te reconectes con la
						naturaleza.
					</p>
				</section>

				<section className="mb-12">
					<h2 className="text-2xl font-semibold text-darkgreen mb-4">
						Valores
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="flex flex-col items-center bg-lightgray p-4 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-earthbrown mb-2">
								Esencia Pura
							</h3>
							<p className="text-earthbrown text-center">
								Nos comprometemos a ofrecer productos de la más alta calidad,
								utilizando ingredientes naturales y puros.
							</p>
						</div>
						<div className="flex flex-col items-center bg-lightgray p-4 rounded-lg shadow-md">
							<h3 className="text-xl font-semibold text-earthbrown mb-2">
								Cuerpos Limpios
							</h3>
							<p className="text-earthbrown text-center">
								Promovemos un estilo de vida saludable y equilibrado,
								enfocándonos en el bienestar integral de nuestros clientes.
							</p>
						</div>
					</div>
				</section>

				<section>
					<h2 className="text-2xl font-semibold text-darkgreen mb-4">
						Agradecimiento
					</h2>
					<p className="text-lg text-earthbrown">
						Agradecemos tu confianza y preferencia. Nos enorgullece ser parte de
						tu camino hacia un bienestar natural y equilibrado.
					</p>
				</section>
			</div>
		</div>
	);
}
