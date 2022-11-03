import Layout from '../components/Layout'
export default function Jsx() {
    const a = 31
    const b = 12
    return (
        <div>
            <Layout titulo="Entendendo o JSX">
    
            <h1>Jsx é um conceito Central</h1>
            { a * b}
            </Layout>
           
        </div>
    )
}