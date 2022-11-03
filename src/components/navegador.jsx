import styles from "../styles/Navegador.module.css"
export default function Navegador (props){
    return (
        <div className={styles.navegador}>

            <a href={props.destino}> {props.texto}</a>
        </div>
    )
}