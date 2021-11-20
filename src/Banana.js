import { useParams } from "react-router"
import contacts from "./contacts.json"
import { useEffect } from "react"
import exemplo from "./arrayDeObjs.json"
export default function Banana(){

    const {banana} = useParams()
    const foundObj = exemplo.find((valorAtual)=>banana === valorAtual.id)


    return <div>
    <h3>Aqui a gente pegou o parametro ":banana" usando o useParams</h3>
    <h4>{foundObj.name}</h4></div>
}