import { useParams } from "react-router-dom"

export default function Activity() {
    const {id} = useParams()

    return(
        <h1>Aktivitet {id} detaljer</h1>
    )
}