import styles from '../styles/estiloso.module.css'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <Layout titulo="Exemplo de CSS Modulari">

        <div className={styles.roxo}>
            <h1>Estilo Usando CSS Módulos</h1>
        </div>

        </Layout>
    )
}