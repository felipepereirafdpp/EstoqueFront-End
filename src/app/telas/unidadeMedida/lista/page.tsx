'use client'
import styles from "../../card.module.css";
import botao from "../../button.module.css"
import { useRouter } from 'next/navigation'; 

export default function TelaListaUnidade(){
    const router = useRouter()
    return (

         <div>
            <div className={styles.titulo}>
            <h1>Unidades de Medida</h1>
            <span>Visualize as unidades de medida disponíveis</span>
            </div>
            <div className={styles.total}>
                <div className={styles.coluna}>
                    <div className={styles.card}>Miligrama (mg)
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>Grama (g)
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>Quilograma (Kg)
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>Mililitro (ml) 
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                </div>
                <div className={styles.coluna}>
                    <div className={styles.card}>Litro (l)
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>Milimetro (mm)
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>Metro (m)
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>Unidade (un)
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                </div>
                
            </div>
                <div className={botao.buttonCreate} onClick={()=> router.push('/telas/unidadeMedida/cadastro')}>
                    <div className={botao.button} >
                        Cadastrar Unidade de Medida
                    </div>
                </div>

        </div>
    )
}