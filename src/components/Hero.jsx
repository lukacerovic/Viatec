import React from "react";

const Hero = ({ contactRef }) => {
    const handleScrollTo = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <section className="hero-section">
            <div className="md:w-[60%] md:h-[80vh] md:p-5 flex flex-col justify-end">
                <div style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "3vw" }}>
                    <div>
                        <h1 className="text-4xl">Najbolji kreditni uslovi i besplatne konsultacije za pametan izbor</h1>
                        <p className="py-5">
                            U Viatec-u verujemo da svaka finansijska odluka treba biti jasna, sigurna i prilagođena vašim potrebama.
                            Kao stručni tim za posredovanje u kreditima, posvećeni smo tome da vam omogućimo najbolju ponudu koja
                            odgovara vašoj situaciji i ciljevima. Uz pažljivu analizu i besplatne konsultacije, pomažemo vam da
                            nađete povoljne kreditne uslove koji vam omogućavaju pametan i održiv finansijski izbor.
                        </p>
                    </div>
                    <button
                        onClick={() => handleScrollTo(contactRef)}
                        className="cta-button text-lg px-5 py-3 rounded-full"
                    >
                        Kontaktirajte nas
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;

