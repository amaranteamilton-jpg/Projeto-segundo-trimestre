const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
      enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
      alternativas: [
        { texto: "Isso é assustador!", afirmacao: "Você se sente receoso com o avanço tão rápido da tecnologia." },
        { texto: "Isso é maravilhoso!", afirmacao: "Você fica animado com as possibilidades que a IA traz." }
      ]
    },
    {
      enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de IA em sala de aula. Qual atitude você toma?",
      alternativas: [
        { 
          texto: "Utiliza uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.",
          afirmacao: "Você aproveita as ferramentas de IA para pesquisar de forma mais eficiente."
        },
        { 
          texto: "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
          afirmacao: "Você prefere construir o trabalho com suas próprias fontes e esforço."
        }
      ]
    },
    {
      enunciado: "Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
      alternativas: [
        { 
          texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
          afirmacao: "Você vê a IA como uma ferramenta de oportunidade e crescimento."
        },
        { 
          texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendo a importância de proteger os trabalhadores.",
          afirmacao: "Você demonstra preocupação com o impacto social da IA no mercado de trabalho."
        }
      ]
    },
    {
      enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
      alternativas: [
        { 
          texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
          afirmacao: "Você prefere criar manualmente, valorizando o processo criativo tradicional."
        },
        { 
          texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
          afirmacao: "Você abraça as ferramentas de IA para potencializar sua criatividade."
        }
      ]
    },
    {
      enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do grupo decidiu fazer com ajuda de uma IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz?",
      alternativas: [
        { 
          texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
          afirmacao: "Você considera o uso completo da IA como uma contribuição válida."
        },
        { 
          texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
          afirmacao: "Você defende o uso consciente da IA, com revisão e contribuição humana."
        }
      ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = ""; // Limpa alternativas anteriores

    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => {
            historiaFinal += alternativa.afirmacao + " ";
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.style.display = "none";
    caixaAlternativas.style.display = "none";
    caixaResultado.style.display = "block";
    
    textoResultado.textContent = historiaFinal.trim() || 
        "Você completou o questionário! Suas escolhas revelam sua visão sobre IA.";
}

 // Inicia o quiz
mostraPergunta();