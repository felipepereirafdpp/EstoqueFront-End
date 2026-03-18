import styles from "../../card.module.css";

export default function TelaListaCategoraia(){
    return (
         <div>
            <div className={styles.titulo}>
            <h1>Unidades de Medida</h1>
            <span>Visualize as unidades de medida disponíveis</span>
            </div>
            <div className={styles.total}>
                <div className={styles.coluna}>
                    <div className={styles.card}>Miligrama (mg)</div>
                    <div className={styles.card}>Grama (g)</div>
                    <div className={styles.card}>Quilograma (Kg)</div>
                    <div className={styles.card}>Mililitro (ml)</div>
                </div>
                <div className={styles.coluna}>
                    <div className={styles.card}>Litro (l)</div>
                    <div className={styles.card}>Milimetro (mm)</div>
                    <div className={styles.card}>Metro (m)</div>
                    <div className={styles.card}>Unidade (un)</div>

                </div>
            </div>

        </div>
    )
}