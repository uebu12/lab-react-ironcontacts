import { useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router"
import { Link } from "react-router-dom"

export default function About (){
    const params = useParams()
    useEffect(()=>{console.log(params)},[])
    

    return <div> <h2>Aqui ficaria a ABOUT</h2>
    <Link to={`/home/about/banana`}>Link pra banana</Link></div>
}