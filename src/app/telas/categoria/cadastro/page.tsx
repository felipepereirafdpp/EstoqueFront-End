import Link from "next/link";
import styles from "../../card.module.css";
import style from "../../input.module.css";
import botao from "../../button.module.css";


export default function TelaCadastroCategoria(){
    return(
         <div>
            <div className={styles.titulo}>
                <h1>Cadastro de Categoria</h1>
                <span>Defina e gerencie as Categorias no estoque</span>
            </div>
            <div className={style.inputs}>
                <label htmlFor="" className={style.label}>Nome da Categoria</label>
                <input type="text"  className={style.input} placeholder="EX: Colher , Garfo"/>
                
                <label htmlFor="descricao" className={style.label}>Descrição da Cadastro</label>
                <input type="text" className={style.input} placeholder="Ex: Essa colhe é de Prata"/>
            </div>
            <div className={botao.buttonCreate}>
                    <div className={botao.button}>
                        Salvar Categoria
                    </div>
                    <div className={botao.button2}>
                        Deletar Categoria</div>
                </div>

        </div>
    )
}