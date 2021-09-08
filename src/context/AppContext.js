import { createContext, useState } from "react";

import Text from "../components/Text";
import Title from "../components/Title";

import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNightBlue } from "react-syntax-highlighter/dist/esm/styles/hljs";

export const AppContext = createContext();

export default function AppProvider(props) {
    const [curRoute, setCurRoute] = useState(window.location.pathname);
    const [blogData, setBlogData] = useState([
        {
            title: "Listas",
            id: "listas",
            pages: [
                {
                    title: "Guia de programação1",
                    id: "guia-de-programacao",
                    posts: [
                        {
                            title: "Aula 1 - Variáveis",
                            id: "variaveis",
                            data: (
                                <>
                                    <Title>Variáveis</Title>
                                    <Text>
                                        Ola a todos, esse é o primeiro epsódio
                                        do "Guia de programação". Essa vai ser
                                        uma série de vídeos ensinando os
                                        princípios da programação, desde o
                                        básico até temas mais avançados.
                                    </Text>
                                    <Text>
                                        Nessa série, usaremos Javascript,
                                        Typescript e Java para entender os
                                        fundamentos da programação.
                                    </Text>
                                    <Text>
                                        E agora, nesse primeiro ep vamos
                                        entender as variáveis.
                                    </Text>
                                    <Text>
                                        Primeiramente, variáveis são valores que
                                        vamos "usar mais tarde". São nelas que
                                        vamos salvar e gerenciar os dados da
                                        nossa aplicação.
                                    </Text>
                                    <Text>
                                        Vamos começar do início, primeiro,
                                        precisamos entender os valores.
                                    </Text>
                                    <Text>Javascript:</Text>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={tomorrowNightBlue}
                                    >
                                        {`
        // tipos de dados:
        
        //string
        /*
        String, em português significa texto, e são um conjunto de caracteres
        Lembrem bem dessa definição, ela vai ser muito útil nas próximas aulas.
        */
        console.log("Olá mundo");
        console.log(\`Olá mundo\`);
        
        //number
        /*
        Number são valores numéricos que podemos atribuir, com eles, a gente
        consegue fazer contas e operações, além de todo o resto de coisas que
        normalmente fazemos com os numeros.
        */
        console.log(15);
        
        //boolean
        /*
        Booleans são valores de "SIM" ou "NÃO", eles definem se algo é verdadeiro.
        True: verdadeiro
        False: falso
        */
        console.log(true);
        console.log(false);
        
        //objetos
        /*
        Nesse vídeo não vamos nos aprofundar em objetos, pois vamos ter uma aula
        apenas para eles. Mas resumindo, os objetos são conjunto de dados que
        salvamos juntos, usando ou não uma chave. Esse conceito pode parecer confuso
        mas as coisas vão ficar claras quando estivermos na aula de objetos. Por hora,
        vamos esquecer isso.
        */
        console.log({
            name: "Brennon",
            trabalho: "Dev",
        });
        console.log(["item1", "item2", "item3"]);
        
        //outros
        /*
        Temos também valores mais abstratos. São o caso do null e undefined;
        O valor null significa que algo es- As variáveis são locais feitos para salvarmos um valor. Podemos salvar, alterar e usar esses valores durante a execução do nosso aplicativo.
        - No javascript, vamos usar a palavra especial "var" para criarmos novas variáveistá vazío, porém possuí um local reservado.
        O undefined significa que algo está indefinido, ou seja, não existe nem
        possuí um local reservado.
        */
        console.log(null);
        console.log(undefined);
        `}
                                    </SyntaxHighlighter>
                                    <Text>
                                        As variáveis são locais feitos para
                                        salvarmos um valor. Podemos salvar,
                                        alterar e usar esses valores durante a
                                        execução do nosso aplicativo.
                                    </Text>
                                    <Text>
                                        No javascript, vamos usar a palavra
                                        especial "var" para criarmos novas
                                        variáveis
                                    </Text>
                                    <Text>Javascript:</Text>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={tomorrowNightBlue}
                                    >
                                        {`
        // As variáveis
        
        //declarando uma variável
        var nome = "Brennon";
        console.log(nome);
        
        //alterando uma variável
        /**
        Quando executamos nosso app, vamos precisar mudar o valor das variáveis,
        para isso, podemos escrever o nome da variável e atribuir um novo valor.
        Isso pode ser feito a qualquer momento, e irá mudar o valor dela em todo
        o código.
        */
        var numero = 19;
        numero = 13;
        console.log(numero);
        
        //Tipos
        /**
         * Os tipos de variáveis são definidos pelo tipo de dado que elas possuem.
         * Temos dois tipos de linguagens, as tipadas e não tipadas.
         * No javascript, não precisamos definir o tipo da variável, e podemos
         * mudar um variável de number para string. Então javascript não é tipado.
         */
        var number = 12;
        number = "String";
        console.log(number);
        `}
                                    </SyntaxHighlighter>
                                    <Text>Typescript:</Text>
                                    <SyntaxHighlighter
                                        language="typescript"
                                        style={tomorrowNightBlue}
                                    >
                                        {`//Tipagem
                                /**
                                 * Essa abordagem pode ocasionar alguns problemas á longo prazo.
                                 * Por isso, podemos usar o typescript.
                                 * O typescript é uma forma de escrever javascript, porém ela
                                 * age de forma tipada.
                                 * No final, é gerado um código javascript. Por isso o typescript
                                 * é, na verdade, uma "falsa tipagem", pois no final, acaba
                                 * executando um código javascript não tipado.
                                 * Mas isso já resolve diversos problemas que poderiam acontecer
                                 * se não usássemos tipagem.
                                 * No typescript, declaramos variáveis assim:
                                 */
                                
                                var texto: string = "Ola";
                                console.log(texto);
                                
                                /**
                                 * Perceba que, após compilarmos o arquivo, é gerado um novo arquivo
                                 * js com o mesmo nome. É esse o arquivos que será executado.
                                 * Mas agora, veja o que acontece sem tentarmos atribuir um valor do
                                 * tipo errado em typescript
                                 * */
                                
                                var numero: number = 19;
                                numero = "Text";
                                console.log(numero);
                                
                                /**
                                 * Veja que é acusado um erro, e não conseguimos compilar o arquivo
                                 * até corrigirmos isso.
                                 * Essa é vantagem da tipagem de
                                 * */`}
                                    </SyntaxHighlighter>
                                    <Text>Java:</Text>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={tomorrowNightBlue}
                                    >{`public class App {
                                    public static void main(String[] args) throws Exception {
                                        
                                        /*
                                        Esse é um código java. Java, diferente do javascript é uma
                                        linguagem tipada de fato.
                                        Nela, para tudo precisamos definir e respeitar os tipos.
                                        */
                                
                                        String texto = "ola";
                                        System.out.println(texto);
                                
                                        /**
                                         * Veja que novamente, não vamos conseguir atribuir um valor
                                         * errado para uma variável
                                         */
                                
                                        int numero = 19;
                                        numero = 'texto';
                                        System.out.println(numero);
                                
                                    }
                                }`}</SyntaxHighlighter>
                                    <Text>Const, var, let e escopo</Text>
                                    <Text>Javascript:</Text>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={tomorrowNightBlue}
                                    >{`// Const, let e var;
                                /**
                                 * Em java script temos várias formas de criar variáveis
                                 * Podemos criar uma variável sem atribuir uma palavra antes:
                                 */
                                var1 = "texto";
                                console.log(var1);
                                
                                /**
                                 * Podemos usar var:
                                 */
                                
                                var var2 = 123;
                                console.log(var2);
                                
                                /**
                                 * Podemos usar let;
                                 */
                                
                                let var3 = true;
                                console.log(var3);
                                
                                /**
                                 * E podemos usar const
                                 */
                                
                                const var4 = null;
                                console.log(var4);
                                
                                /**
                                 * A diferença entre var e const é simples.
                                 * Como vimos, podemos alterar o valor de uma variável na execução do
                                 * código.
                                 * Com const é diferente, não podemos sobrescrever o valor de uma const
                                 */
                                
                                // const preco = 19;
                                // preco = 12;
                                // console.log(preco);
                                
                                /**
                                 * Repare que recebemos um erro de que não podemos sobrescrever uma constante.
                                 * Algo importante de termos em mente é que precisamos fazer um código legível,
                                 * sendo assim, precisamos seguir boas práticas de programação.
                                 * Quando temos uma constante que é usada para, por exemplo, definir as
                                 * dimensões do seu jogo, costumamos, por convenção, escrever com letras
                                 * em uppercase (maiúsculas).
                                 */
                                
                                const WIDTH = 900;
                                console.log(WIDTH);
                                
                                /**
                                 * É importante ressaltar que tanto o javascript, quanto java, quanto várias
                                 * outras linguagens são camelCase, ou seja, usar letras em caixa alta faz
                                 * diferença na hora da chamada.
                                 */
                                
                                var camelcase = 123;
                                var camelCase = 345;
                                console.log(camelCase);
                                console.log(camelcase);
                                
                                /**
                                 * Agora, a diferença entre let e var é um pouco mais complexa.
                                 * Para entender, precisamos entender o conceito de escopo.
                                 * O escopo, em programação, é uma "região" onde os valores interagem.
                                 */
                                
                                // {
                                //     let ola = "Hello world!";
                                // }
                                
                                // {
                                //     console.log(ola);
                                // }
                                
                                /**
                                 * Tendo isso em mente, o var ignora esse escopo, ela é acessível em qualquer
                                 * lugar do código, podendo ser declarada dentro de um escopo, e chamada
                                 * dentro de outro sem problemas.
                                 */
                                
                                {
                                    var ola = "Escopo global";
                                }
                                
                                {
                                    console.log(ola);
                                }
                                
                                /**
                                 * Chamamos o escopo que engloba toda a aplicação de escopo global.
                                 * Sendo assim, uma variável que está nesse escopo é chamada de
                                 * variável global.
                                 */`}</SyntaxHighlighter>
                                    <Text>Regras e boas práticas</Text>
                                    <SyntaxHighlighter
                                        language="javascript"
                                        style={tomorrowNightBlue}
                                    >{`/**
                                * Manter um código organizado é essencial para todos os projetos, seja ele
                                * grande ou pequeno.
                                * Tendo isso em mente, existem algumas práticas que tornam seu código mais
                                * legível e simples de entender.
                                * Essas convenções são chamadas de "Boas práticas de programação".
                                * Mas, para conseguir aplicar essas boas práticas, primeiro temos que entender
                                * as regras que circundam as linguagens.
                                * No javascript, para a criação de variáveis, é importante sabermos que
                                * podemos usar tanto letras(caixa alta e caixa baixa), números e alguns
                                * símbolos (como _ ou $).
                                */
                               
                               var var1$_ = "Hello World!";
                               console.log(var1$_);
                               
                               /**
                                * Porém, nunca podemos iniciar uma variável com números, apenas com letras ou
                                * símbolos.
                                */
                               
                               // var 1var = 123;
                               // console.log(1var)
                               
                               /**
                                * Tendo esses conceitos em mente, podemos adotar alguns padrões para deixarmos
                                * nossos códigos mais profissionais.
                                * Um deles é o padrão de nomes camelCase.
                                * Ele é muito forte em linguagens que são, por padrão, case sensitive, porém
                                * pode ser adotado como padrão de escrita em linguagens que não são.
                                * Nele, nomeamos a variável separando palavras por inicias maiúsculas.
                                * E isso deriva de outro conceito importante, a escolha dos nomes.
                                * Para isso, precisamos considerarimport Title from '../components/Title';
 que, é melhor nomes grandes do que nomesimport { SyntaxHighlighter } from 'react-syntax-highlighter';

                                * pouco legíveis.
                                * Por exemplo:
                                */
                               
                               var cptLpTrk = 5;
                               var completeLapsOnTheTrack = 5;
                               
                               console.log(completeLapsOnTheTrack);
                               
                               /**
                                * Nesse exemplo, temos duas variáveis, cptLpTrk e completeLapsOnTheTrack.
                                * Qual das duas você consegue apenas bater o olho e entender do que se trata?
                                * A cptLpTrk você não consegue dizer para que serve.
                                */`}</SyntaxHighlighter>
                                </>
                            ),
                        },
                    ],
                },
                {
                    title: "Guia de programação2",
                    id: "guia-de-programacao2",
                    posts: [
                        {
                            title: "Aula 1 - Variáveis",
                            id: "variaveis",
                            data: "",
                        },
                    ],
                },
                {
                    title: "Guia de programação3",
                    id: "guia-de-programacao3",
                    posts: [
                        {
                            title: "Aula 1 - Variáveis",
                            id: "variaveis",
                            data: "",
                        },
                    ],
                },
                {
                    title: "Guia de programação4",
                    id: "guia-de-programacao4",
                    posts: [
                        {
                            title: "Aula 1 - Variáveis",
                            id: "variaveis",
                            data: "",
                        },
                    ],
                },
            ],
        },
        {
            title: "Dicas",
            id: "dicas",
            posts: [],
        },
    ]);

    function changeRoute(route) {
        setCurRoute("/" + route);
    }

    function getBlogData() {
        return blogData;
    }

    return (
        <AppContext.Provider
            value={{
                curRoute,
                changeRoute,
                blogData,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}
