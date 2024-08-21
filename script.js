const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Na sua opinião, considerando a cultura contemporânea do 'fazer menos é fazer mais', a prática da castração de animais deve ser vista como: uma medida necessária para controlar a superpopulação e promover a saúde dos animais; ou como uma intervenção desnecessária que pode interferir nos processos naturais de reprodução?",
        alternativas: [
            {
                texto:"A prática da castração de animais deve ser vista como uma medida necessária para controlar a superpopulação e promover a saúde dos animais, alinhando-se com a ideia de que menos animais significa mais qualidade de vida para cada um deles.",
                afirmacao:"a tribo permite a castração de algumas especies de animais  para controle"
            },
            {
                texto:"A castração de animais pode ser vista como uma intervenção desnecessária que interfere nos processos naturais de reprodução, desconsiderando que os ecossistemas têm capacidade de ajustar suas populações naturalmente",
                afirmacao:"A tribo entende que a reprodução é necessario e nao deve ser contida."
            }
        ]
    },
    {
        enunciado: "Qual é a visão de cada tribo indigena  diante da castração de animais sendo que é  realidade  a cultura do menos é mais já é pertinente?",
        alternativas: [
            {
                texto:"Desafiador",
                afirmacao:"A cultura dos povos indígenas é rica e caracteriza-se pela intensa relação com a natureza. A questão da procriação é natural e vista como comum."
            },
            {
                texto:"Apoiam as medidas já tomadas",
                afirmacao:"Em algumas culturas indígenas, a castração pode ser realizada por meio de métodos que utilizam ervas ou técnicas de restrição que são menos invasivas comparadas às cirurgias modernas. Isso reflete uma abordagem de menos é mais."
            }
        ]
    },
    {
        enunciado: "Como utilizar a tecnologia para promover ações objetivas para aumentar o número de castrações, e assim diminuir a quantidade de animais em situação de rua, e ações de conscientização, promovendo a mudança cultural para evitar o abandono de animais, utilizando hábitos do menos é mais?",
        alternativas: [
            {
                texto:"Uso das redes sociais para apoio e divulgação das ações ",
                afirmacao:"Uso das redes sociais para apoio e divulgação das ações"
            },
            {
                texto: "Ser parceiro das ações ",
                afirmacao:"Uso das redes sociais para apoio e divulgação das ações"
            }
        ]   
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener('click', ()=> respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);        
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
    atual++
    mostraPergunta(); 
}
mostraPergunta();

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2030...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}