import React, { forwardRef } from 'react';

const Team = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="flex pt-[15%] px-10">
            <div style={{ color: "#181818" }} className="p-5 md:w-[60%]">
                <h1 className="text-5xl md:text-7xl">Nas Tim</h1>
                <p className="text-xl pt-5">
                Agencija Viatec, koju predvodi Ljiljana Cerović, prepoznatljiva je po stručnosti, usredsređenosti na potrebe klijenata i širokoj bazi kontakata iz bankarsko-finansijske oblasti.
                <br/><br/>
                Dobro utemeljen koncept Agencije i sve navedene vrednosti klijentima obezbeđuju sigurnog partnera na koga se mogu osloniti od momenta donošenja odluke o kreditnom zaduživanju do realizacije plasmana kod izabrane poslovne banke.
                <br/><br/>
                Pored posredovanja na relaciji klijent-banka, Agencija Viatec svojim klijentima nudi i besplatne usluge posredovanja u komunikaciji sa investitorima, proceniteljima i poreskim organima, kako u procesu apliciranja za stambeni kredit, tako i neposredno nakon njegove realizacije.
                    <br/><br/>
                </p>
            </div>
        </div>
    );
});

export default Team;

