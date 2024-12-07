import React, { useRef, useEffect } from 'react';

const partnersLogo = [
    "images/aik.png",
    "images/inteza (1).png",
    "images/otp (1).png"
];

export default function Partners() {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;

        let scrollAmount = 0;
        const speed = 1;

        const animate = () => {
            scrollAmount -= speed;

            if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
                scrollAmount = 0;
            }

            track.style.transform = `translateX(${scrollAmount}px)`;
            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <div style={{
            overflow: "hidden",
            backgroundColor: "#a29595",
            padding: "10px",
            marginInline: "20px",
            display: "flex",
            alignItems: "center",
        }} className="mt-20 rounded-xl">
            <div ref={trackRef} style={{
                display: "flex",
                whiteSpace: "nowrap"
            }}>
                {[...partnersLogo, ...partnersLogo].map((partner, index) => (
                    <div key={index} style={{ 
                        display: "inline-block", 
                        width: "25vw", 
                        padding: "0 3%"
                    }}>
                        <img src={partner} alt="partner" style={{ 
                            width: "100%", 
                            height: "100%", 
                            objectFit: "contain" 
                        }} />
                    </div>
                ))}
            </div>
        </div>
    );
}
