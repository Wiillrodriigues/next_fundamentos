
import Layout from '../components/Layout'

export default function Integracao() {
    fetch('http://localhost:3000/api/clientes/')
        .then(resp => resp.json())
        .then(dados => console.log(dados))

    return (
        <Layout titulo="Interagindo com APi">

        
            <ul>
                <li>Código:</li>
                <li>Nome:</li>
                <li>Email:</li>
            </ul>
       

        </Layout>
    )
}