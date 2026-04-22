'use client'
import Link from "next/link";
import styles from "../../card.module.css";
import style from "../../input.module.css";
import botao from "../../button.module.css";
import "./pesquisaProduto.css";
import { useRouter } from "next/navigation";

export default function TelaPesquisaProduto() {
   const router = useRouter();
    return (
        <section>
            <div className={styles.titulo}>
                <h1>Pesquisa de Produtos</h1>
                <span>Encontre os produtos que você precisa</span>
            </div>
            <div className="grup-pesquisa">
                <div className="block-pesquisa">
                    <label htmlFor="categoria" className="">Categoria:</label>
                    <select name="categoria" id="">
                        <option value="0"></option>
                        <option value="1">Garfo</option>
                        <option value="2">Prato</option>
                    </select>
                </div>
                <div className="block-input-text">
                    <label htmlFor="nome">Nome ou Descrição:</label>
                    <input type="text" name="nome" placeholder="Ex: Garfo, Prato . . ." />
                </div>
                <div className={botao.blockButtonProduto}>
                    <div className={botao.grupButtonProduto}>
                        Pesquisa
                    </div>
                </div>
            </div>
            <div className="grup-table">
                <table>
                    <thead>
                        <tr>
                            <th>Categoria</th>
                            <th>Nome</th>
                            <th>Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr onClick={() => router.push("/telas/produto/cadastro")}>
                            <td>Garfo</td>
                            <td>Garfo de Sopa</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => router.push("/telas/produto/cadastro")}>
                            <td>Garfo</td>
                            <td>Garfo de Sopa</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => router.push("/telas/produto/cadastro")}>
                            <td>Garfo</td>
                            <td>Garfo de Sopa</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => router.push("/telas/produto/cadastro")}>
                            <td>Garfo</td>
                            <td>Garfo de Sopa</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => router.push("/telas/produto/cadastro")}>
                            <td>Garfo</td>
                            <td>Garfo de Sopa</td>
                            <td>10</td>
                        </tr>
                        <tr onClick={() => router.push("/telas/produto/cadastro")}>
                            <td>Garfo</td>
                            <td>Garfo de Sopa</td>
                            <td>10</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
            <div className={botao.blockButtonCreate}>
                    <div className={botao.grupButtonProduto} onClick={() => router.push("/telas/produto/cadastro")}>
                        Criar Produto
                    </div>
            </div>

           
        </section>
    )
}