
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css"></link>
      </head>
      <body>
          <header>
                <h1>Painel Admistrativo</h1>
          </header>

          <nav>
            <ul>

              <li><Link href={"/"}>Início</Link></li>
              <li><Link href={"/telas/categoria/lista"}>Categoria</Link></li>
              <li><Link href={"/telas/unidadeMedida/lista"}>Unidade de Medida</Link></li>
              <li><Link href={"/telas/produto/pesquisa"}>Produto</Link></li>
            </ul>
              
          </nav>

          <main>   
       
              
           
            {children} 
          </main>

          <footer>    
              <h2>© 2026 Sistema de Controle de Estoque</h2>
          </footer>
      </body>
    </html>
  );
}
