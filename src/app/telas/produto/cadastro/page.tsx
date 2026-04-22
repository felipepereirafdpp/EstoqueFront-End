import Link from "next/link";
import styles from "../../card.module.css";
import style from "../../input.module.css";
import botao from "../../button.module.css";
import "./cadastroProduto.css";

export default function TelaCadastroProduto() {
    return (
        <div>
            <div className={styles.titulo}>
                <h1>Cadastro de Produto</h1>
                <span>Defina e gerencie os Produtos no estoque</span>
            </div>
            <div className="containerGrid">
                <div className="groupImageButton">
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <input type="file" />
                </div>
                <div className="goup-infos">
                    <div className={style.inputs}>
                        <label htmlFor="" className={style.label}>Nome do Produto</label>
                        <input type="text" className={style.input} placeholder="Martelo" />

                        <label htmlFor="fracionavel" className={style.label} > Unidade de Medida </label>
                        <select name="fracionavel" id="" defaultValue="0" className={style.input}>
                            <option value="0" ></option>
                            <option value="1" >Não</option>
                            <option value="2">Sim</option>
                        </select>

                        <label htmlFor="fracionavel" className={style.label} > Categoria </label>
                        <select name="fracionavel" id="" defaultValue="0" className={style.input}>
                            <option value="0" >Utilitarios</option>
                            <option value="1" >Ferramentas Atomaticas</option>
                            <option value="2">Ferramenta Manuais</option>
                        </select>

                        <label htmlFor="fracionavel" className={style.label} > Habilitado </label>
                        <select name="fracionavel" id="" defaultValue="0" className={style.input}>
                            <option value="0">Sim</option>
                            <option value="1" >Não</option>
                        </select>


                    </div>
                </div>
                <div className="groupDescricao">
                    <div className="inputInterno">
                        <label htmlFor="" className={style.label}>Descrição:</label>
                        <input type="text" className={style.inputGrande} />
                    </div>
                </div>
            </div>
            <div className={botao.buttonCreate}>
                <div className={botao.button}>
                    Salvar Produto
                </div>
            </div>


        </div>
    )
}