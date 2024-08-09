const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de chegar à cidade onde acontecerão os Jogos Olímpicos. Qual é a sua primeira impressão?",
        alternativas: [
            {
                texto: "Uau, que evento grandioso! Estou ansioso para ver as competições.",
                afirmacao: "Você está empolgado para a experiência e preparado para acompanhar todos os eventos."
            },
            {
                texto: "É muita gente e muita agitação, isso pode ser um pouco cansativo.",
                afirmacao: "Você está preocupado com o volume de pessoas e como isso pode afetar sua experiência."
            }
        ]
    },
    {
        enunciado: "Durante a cerimônia de abertura, você é convidado a escolher um esporte para torcer. Qual você escolhe?",
        alternativas: [
            {
                texto: "Escolho o atletismo, sempre admirei a dedicação dos atletas e suas performances incríveis.",
                afirmacao: "Você se sente inspirado pelo esforço e talento dos atletas e está ansioso para ver as provas."
            },
            {
                texto: "Prefiro a natação, gosto da técnica e da estratégia envolvidas nas provas.",
                afirmacao: "Você está interessado nas estratégias e habilidades técnicas que definem as competições."
            }
        ]
    },
    {
        enunciado: "Em um evento importante, um atleta de seu país está prestes a competir em uma final. Como você se sente?",
        alternativas: [
            {
                texto: "Estou nervoso e torcendo muito para que eles tenham um bom desempenho.",
                afirmacao: "Você sente uma mistura de nervosismo e entusiasmo, ansioso para apoiar seu atleta."
            },
            {
                texto: "Estou mais calmo, confio no preparo do atleta e apenas aproveito o evento.",
                afirmacao: "Você confia no treinamento do atleta e escolhe curtir o evento sem muita ansiedade."
            }
        ]
    },
    {
        enunciado: "Após as competições, você tem a oportunidade de visitar a vila olímpica. O que você acha da experiência?",
        alternativas: [
            {
                texto: "A vila olímpica é fascinante, ver todos os atletas e as instalações é incrível.",
                afirmacao: "Você está impressionado com a infraestrutura e a convivência dos atletas."
            },
            {
                texto: "É interessante, mas 
