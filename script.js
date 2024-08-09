const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de chegar aos Jogos Olímpicos e está impressionado com a abertura. Qual é a sua primeira reação?",
        alternativas: [
            {
                texto: "Que espetáculo incrível! Estou animado para acompanhar as competições.",
                afirmacao: "Você está entusiasmado com o evento e ansioso para ver todos os esportes."
            },
            {
                texto: "É muita gente e muita agitação, isso pode ser um pouco cansativo.",
                afirmacao: "Você está preocupado com a multidão e o barulho, mas está empolgado para a experiência."
            }
        ]
    },
    {
        enunciado: "Durante os Jogos, você é convidado a escolher um esporte para acompanhar. Qual esporte você escolhe?",
        alternativas: [
            {
                texto: "Escolho o atletismo, admiro a velocidade e a resistência dos corredores.",
                afirmacao: "Você está fascinado pela habilidade e dedicação dos atletas de atletismo."
            },
            {
                texto: "Prefiro a natação, gosto da técnica e da estratégia envolvidas nas provas.",
                afirmacao: "Você se interessa pela estratégia e pela técnica das competições de natação."
            }
        ]
    },
    {
        enunciado: "Em uma das finais, um atleta de seu país está prestes a competir. Como você se sente?",
        alternativas: [
            {
                texto: "Estou nervoso e torcendo muito para que ele tenha um bom desempenho.",
                afirmacao: "Você está ansioso e esperançoso, torcendo pelo sucesso do atleta."
            },
            {
                texto: "Estou calmo, confio na preparação do atleta e apenas aproveito o evento.",
                afirmacao: "Você tem confiança na preparação do atleta e está relaxado, aproveitando a competição."
            }
        ]
    },
    {
        enunciado: "Após as competições, você tem a oportunidade de visitar a vila olímpica. O que você acha da experiência?",
        alternativas: [
            {
                texto: "A vila olímpica é impressionante, ver os atletas e as instalações é incrível.",
                afirmacao: "Você está encantado com a infraestrutura e a convivência dos atletas na vila."
            },
            {
                texto: "É interessante, mas a logística e a multidão podem ser desafiadoras.",
                afirmacao: "Você acha a visita enriquecedora, mas reconhece os desafios da logística e da agitação."
            }
        ]
    },
    {
        enunciado: "Ao final dos Jogos Olímpicos, como você resume sua experiência?",
        alternativas: [
            {
                texto: "Foi uma experiência inesquecível, cheia de momentos emocionantes e inspiração.",
                afirmacao: "Você sente que os Jogos foram uma experiência rica e memorável."
            },
            {
                texto: "Foi interessante, mas o ritmo intenso dos eventos foi cansativo.",
                afirmacao: "Você acha que os Jogos foram fascinantes, mas também exaustivos devido ao ritmo acelerado."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Os Jogos Olímpicos chegaram ao fim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

