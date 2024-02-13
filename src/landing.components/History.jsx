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
                        <div className="flex flex-col md:flex-row gap-10 font-content text-sm items-center">
                            <p className="big-first-letter ">
                                Menc non elit libero. Quisque massa porta ut placerat lentesque non
                                diam. Nam convallis porta rhoncus. Maecenas varius eget turpis
                                suscipit porta sapien tinc Mauris tempor libero fringilla orci
                                vivrra faucibue fringilla orci vivrra faucibus. Integer ullamcorper
                                erat in tellus efficitur, quis porta sapien tincidunt. Nunc mattis
                                lectus sed semper semper.
                            </p>
                            <p>
                                Menc non elit libero. Quisque massa porta ut placerat lentesque non
                                diam. Nam convallis porta rhoncus. Maecenas varius eget turpis
                                suscipit porta sapien tinc Mauris tempor libero fringilla orci
                                vivrra faucibue fringilla orci vivrra faucibus. Integer ullamcorper
                                erat in tellus efficitur, quis porta sapien tincidunt. Nunc mattis
                                lectus sed semper semper.
                            </p>
                        </div>
                        <img src="/img/firma.png" alt="" className="p-5 " />
                    </div>
                </div>
            </div>
        </div>
    );
}
