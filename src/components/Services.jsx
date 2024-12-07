import React, { useState, useRef, forwardRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

const services = [
    { title: "Stambeni Krediti", description: "Namenjeni za kupovinu ili renoviranje nekretnine, uz mogućnosti varijabilnih ili fiksnih kamatnih stopa, kao i različite rokove otplate." },
    { title: "Kes Krediti", description: "Keš krediti omogućavaju brz pristup gotovini za različite lične potrebe, bez obaveze navođenja svrhe korišćenja sredstava. Dostupni su u dinarima i eurima, sa fiksnim kamatnim stopama koje omogućavaju stabilne mesečne rate tokom celog perioda otplate." },
    { title: "Brze Kreditne Procene", description: "Procena kreditne sposobnosti klijenta na osnovu osnovnih informacija omogućava brz uvid u maksimalni iznos kredita koji klijent može dobiti." },
    { title: "Priprema i Organizacija Dokumentacije", description: "Asistencija u prikupljanju i popunjavanju potrebne dokumentacije, što značajno ubrzava proces dobijanja kredita i štedi klijentovo vreme." },
    { title: "Konsultacije u domenu poreskih olaksica", description: "Pružamo stručne konsultacije kako biste iskoristili sve mogućnosti za povrat poreza i poreske olakšice. Naš tim vam pomaže da razumete aktuelne propise i primenite rešenja prilagođena vašim potrebama, čime optimizujete svoje poreske obaveze." }
];

const Services = forwardRef((props, ref) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null); // Referenca na Swiper

    const handleTitleClick = (index) => {
        setActiveIndex(index);
        // Promeni aktivni slide kada se klikne na naslov
        if (swiperRef.current) {
            swiperRef.current.swiper.slideTo(index, 1300); // Pomeri Swiper na odgovarajući slide
        }
    };

    return (
        <section ref={ref} className="services-container px-10 flex flex-col md:flex-row justify-center items-center">
            <div className="services-titles flex flex-col items-center md:items-start md:flex-1 my-5 md:my-0">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`service-title ${index === activeIndex ? 'active text-xl md:text-4xl' : 'md:text-2xl'} py-3`}
                        onClick={() => handleTitleClick(index)}
                    >
                        {service.title}
                    </div>
                ))}
            </div>
            <Swiper
                ref={swiperRef} 
                speed={1300}
                direction={'vertical'}
                slidesPerView={1.5} 
                initialSlide={activeIndex}
                centeredSlides={true}
                loop={false} 
                spaceBetween={50}
                mousewheel={true}
                modules={[Mousewheel, Pagination]}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="mySwiper"
            >
                {services.map((service, index) => (
                    <SwiperSlide key={index} style={{ alignSelf: "center" }}>
                        <p>{service.description}</p>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
});

export default Services;

