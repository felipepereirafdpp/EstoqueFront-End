'use client'
import { useRouter } from "next/navigation";
import styles from "../../card.module.css";
import botao from "../../button.module.css"

export default function TelaListaCategoraia() {
    const router = useRouter();
    return (
        <div>
            <div className={styles.titulo}>
                <h1>Categorias de Produtos</h1>
                <span>Navegue pelos grupos de produtos disponíveis no sistema</span>
            </div>
            <div className={styles.total}>
                <div className={styles.coluna}>
                    <div className={styles.card}>
                        Canecas
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>
                        Colherzinhas
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>
                        Chaleiras
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>
                        Cholheroes
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                </div>
                <div className={styles.coluna}>
                    <div className={styles.card}>
                        Pratos Rasos
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>
                        Pratos Fundos
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}
                    >Garfos
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>
                        Facões
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                </div>
                <div className={styles.coluna}>
                    <div className={styles.card}>
                        Saleiro
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>
                        Tapoer
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>
                        Açucareiros
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                    <div className={styles.card}>
                        Panela Feijão
                        <div className={styles.detalhes} onClick={() => router.push('/telas/categoria/cadastro')} >
                            Veja Detalhes
                        </div>
                    </div>
                </div>
            </div>
            <div className={botao.buttonCreate} onClick={() => router.push('/telas/categoria/cadastro')}>
                <div className={botao.button}>Cadastrar Categoria</div>
            </div>

        </div>
    )
}