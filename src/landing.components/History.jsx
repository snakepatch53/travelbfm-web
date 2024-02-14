import Title from "./Title";

export default function History() {
    return (
        <div className="relative">
            <img
                src="/img/fruit-section.png"
                alt=""
                className="absolute w-full h-full object-contain object-bottom"
            />

            <div className="px-[--pdd] py-20 pb-32">
                <div className="container flex flex-col items-center">
                    <div className="relative z-10 flex flex-col gap-10 justify-center items-center">
                        <div className="flex flex-col items-center justify-center">
                            <Title text="Nuestra Historia" />
                        </div>
                        <div className="big-first-letter columns-1 md:columns-2 gap-10 font-content text-sm text-justify opacity-90">
                            <p className="mb-3">
                                En el corazón de Sucúa, la comida es una celebración arraigada en
                                nuestras tradiciones y comunidad. Desde tiempos antiguos, nuestros
                                platos han honrado nuestras raíces, fusionando sabores locales con
                                influencias culinarias globales. Nuestros agricultores y pescadores
                                nos brindan ingredientes frescos y auténticos que son la esencia
                                misma de nuestra cocina.
                            </p>
                            <p className="mb-3">
                                Ven y descubre la riqueza de nuestra gastronomía, donde cada plato
                                cuenta una historia, une a las familias y conecta a las personas con
                                nuestras tradiciones y nuestra tierra. Te esperamos con los brazos
                                abiertos para una experiencia culinaria inolvidable en Sucúa.
                            </p>
                            <p className="mb-3">
                                La comida en Sucúa es más que una necesidad; es una experiencia
                                sensorial que despierta los sentidos y lleva a nuestros visitantes
                                en un viaje culinario único. Desde los aromas tentadores de los
                                puestos callejeros hasta los refinados sabores de la alta cocina
                                internacional, Sucúa ofrece un festín para todos los gustos y
                                ocasiones.
                            </p>
                            <p className="mb-3">
                                La magia de Sucúa radica en su diversidad culinaria y su compromiso
                                con los productos locales. Cada plato es un homenaje a nuestros
                                antepasados y un testimonio de la riqueza cultural que define a
                                nuestro querido cantón. Te invitamos a sumergirte en el deleite
                                culinario de Sucúa, donde la mesa está siempre lista para recibirte
                                y donde cada bocado te lleva en un viaje a través de los sabores y
                                las historias de nuestra tierra.
                            </p>
                        </div>
                        <img src="/img/firma.png" alt="" className="p-5 " />
                    </div>
                </div>
            </div>
        </div>
    );
}
