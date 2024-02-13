export default function History() {
    return (
        <div className="relative">
            <img
                src="/image/fruit-section.png"
                alt=""
                className="absolute w-full h-full object-contain object-bottom"
            />

            <div className="px-[--pdd]">
                <div className="container">
                    <div className="relative z-10 flex flex-col gap-10 items-center p-[--pdd] md:p-20">
                        <div className="flex flex-col items-center">
                            <h3 className="font-title2 text-center text-5xl text-[--c3-txt2]">
                                Nuestra Historia
                            </h3>
                            <img src="/image/title.png" alt="" />
                        </div>
                        <div className="flex flex-col md:flex-row font-content text-sm items-center gap-5">
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
                        <img src="/image/firma.png" alt="" className="p-5 " />
                    </div>
                </div>
            </div>
        </div>
    );
}
