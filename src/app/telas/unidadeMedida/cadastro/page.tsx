import Link from "next/link";
import styles from "../../card.module.css";
import style from "../../input.module.css";
import botao from "../../button.module.css";



export default function TelaCadastroUnidade(){
    return (
         <div>
            <div className={styles.titulo}>
                <h1>Cadastro de Unidade de Medida</h1>
                <span>Defina e gerencie as unidades utilizadas no estoque</span>
            </div>
            <div className={style.inputs}>
                <label htmlFor="" className={style.label}>Sigla da Unidade</label>
                <input type="text"  className={style.input} placeholder="Ex: UN, KG, L"/>
                
                

                <label htmlFor="fracionavel"  className={style.label} >Permite fracionamento? </label>
                <select name="fracionavel" id="" defaultValue="0" className={style.input}>
                    <option value="0" >Não</option>
                    <option value="1">Sim</option>
                </select>

                
                <label htmlFor="descricao" className={style.label}>Descrição da Unidade</label>
                <input type="text" className={style.input} placeholder="Ex: Quilograma, Litro, Unidade"/>
            </div>
            <div className={botao.buttonCreate}>
                    <div className={botao.button}>
                        Salvar Unidade de Medida
                    </div>
                    <div className={botao.button2}>
                        Deletar Unidade de Medida</div>
                </div>

        </div>
    )
}