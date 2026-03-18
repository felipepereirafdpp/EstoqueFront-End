import styles from "../../card.module.css";

export default function TelaListaCategoraia() {
    return (

        <div>
            <div className={styles.titulo}>
            <h1>Categorias de Produtos</h1>
            <span>Navegue pelos grupos de produtos disponíveis no sistema</span>
            </div>
            <div className={styles.total}>
                <div className={styles.coluna}>
                    <div className={styles.card}>Canecas</div>
                    <div className={styles.card}>Colherzinhas</div>
                    <div className={styles.card}>Chaleiras</div>
                    <div className={styles.card}>Cholheroes</div>
                    <div className={styles.card}>Pratos Rasos</div>
                    <div className={styles.card}>Pratos Fundos</div>
                </div>
                <div className={styles.coluna}>
                    <div className={styles.card}>Garfos</div>
                    <div className={styles.card}>Facões</div>
                    <div className={styles.card}>Saleiro</div>
                    <div className={styles.card}>Tapoer</div>
                    <div className={styles.card}>Açucareiros</div>
                    <div className={styles.card}>Panela que faz Feijão</div>
                </div>
            </div>

        </div>
    )
}