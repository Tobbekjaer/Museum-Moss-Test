import { useParams } from "react-router-dom"

export default function Activities() {
    const { museumSlug } = useParams()

    return(
        <h1>Alle aktiviteter for { museumSlug }</h1>
    )
}