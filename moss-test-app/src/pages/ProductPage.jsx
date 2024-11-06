import React from "react";
import { useParams } from "react-router-dom";

export default function ProductPage() {
    const params = useParams();

    return(
        <h3>Læs mere om produkt {params.id}</h3>
    )
}