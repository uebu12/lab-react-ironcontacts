import { Link } from "react-router-dom"

export default function Home (){
return <div><h1>Agora estamos na home</h1>
<Link to={"/home/about"}>Para a about</Link></div>
}