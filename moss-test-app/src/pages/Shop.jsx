import React from "react"
import Products from "../components/Products"

export default function Shop() {
    return (
        <>
        <h1>Butik</h1>
        <p>Produkterne på denne side kan bestilles via mail post@museummoss.dk eller på telefon 98843105.</p>
        <p>Ordren kan afhentes på Vildmosemuseet og Dorf Møllegård efter aftale.</p>
        <p>Produkterne kan også sendes hjem til dig, i så fald pålægges et fragtgebyr.</p>
        <Products />
        </>
    )
}