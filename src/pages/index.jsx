import Navegador from "../components/navegador";

export default function Home() {
    return ( 
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems:'center',
            flexWrap: ' wrap',
            height:'100vh',
        }}>
            <nav>
                <Navegador texto="Estiloso" destino="/estiloso"/>
                <Navegador texto="Teste" destino="teste"/>
                <Navegador texto="JSX" destino="jsx"/>
                <Navegador texto="Navegação " destino="/cliente/123"/>
                <Navegador texto="Estado " destino="estado"/>
                <Navegador texto="Integração " destino="integracao"/>
                <Navegador texto="Conteúdo Estático " destino="estatico"/>
            </nav>
            

        </div>

    )
}