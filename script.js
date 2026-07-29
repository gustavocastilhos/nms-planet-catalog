let planetas = []

function cadastrarPlaneta() {
    const novoPlaneta = {
        id: Date.now(), 
        nome: document.getElementById("input-nome").value,
        vida: document.getElementById("input-vida").value,
        clima: document.getElementById("input-clima").value,
        distancia: Number(document.getElementById("input-distancia").value),
        galaxia: document.getElementById("input-galaxia").value
    } 
    planetas.push(novoPlaneta);
    console.log("Planeta cadastrado:", planetas);
    
    limparFormulario();
    mostrarTodos();
}
function limparFormulario() {
    document.getElementById("input-nome").value = "";
    document.getElementById("input-vida").value = "";
    document.getElementById("input-clima").value = "";
    document.getElementById("input-distancia").value = "";
    document.getElementById("input-id").value = "";
    document.getElementById("input-galaxia").value = "";
}
function mostrarTodos() {
    const painel = document.getElementById("painel-planetas");
    painel.innerHTML = ""; 

    for (let i = 0; i < planetas.length; i++) {
        painel.innerHTML += `
        <div class="card-planeta">
            <h2>🪐 ${planetas[i].nome}</h2>
            <p><strong>👽 Paraíso:</strong> ${planetas[i].vida}</p>
            <p><strong>🌪️ Clima:</strong> ${planetas[i].clima}</p>
            <p><strong>📏 Distância:</strong> ${planetas[i].distancia} Anos-luz</p>
            <p><strong>🌌 Galáxia:</strong> ${planetas[i].galaxia}</p>
            <p class="id-text">ID: ${planetas[i].id}</p>
        </div>`; 
    }
}
function testar() {
    planetas = [
        {
            id: 101,
            nome: "New Drogradur",
            vida: "Sim, Planeta Paraíso perfeito",
            clima: "Grama fluorescente, Sentinelas pacíficos",
            distancia: 3400,
            galaxia: "Euclid"
        },
        {
            id: 102,
            nome: "Doidô-Gamma 4",
            vida: "Não, ambiente hostil",
            clima: "Tempestades tóxicas, Sentinelas Agressivos",
            distancia: 650000,
            galaxia: "Calypso"

        },
        {
            id: 103,
            nome: "Indium Prime",
            vida: "Sim, base de mineração construída",
            clima: "Chuva fervente extrema",
            distancia: 710000,
            galaxia: "Hilbert Dimension"
        },
        {
            id: 104,
            nome: "Parikadi",
            vida: "Nao, ambiente hostil",
            clima: "Oxigenio radioativo",
            distancia: 2310000,
            galaxia: "Juriabulia"
        },
        {
            id: 105,
            nome: "Refavid",
            vida: "Sim, planeta praticamente perfeito",
            clima: "Luz do sol azul e grama rosa",
            distancia: 542400,
            galaxia: "lartezol"
        },
        {
            id: 106,
            nome: "Ridalveriaforil",
            vida: "Não",
            clima: "Nada agradavel",
            distancia: 953270000,
            galaxia: "Tindarir"
        }
    ];

    console.log("Dados de teste carregados:", planetas);
    mostrarTodos();
}
function pesquisar() {
    let nomeProcurado = document.getElementById("input-nome").value;
    
    for (let i = 0; i < planetas.length; i++) {
        if (nomeProcurado.toLowerCase() === planetas[i].nome.toLowerCase()) {
            document.getElementById("input-vida").value = planetas[i].vida;
            document.getElementById("input-clima").value = planetas[i].clima;
            document.getElementById("input-distancia").value = planetas[i].distancia;
            document.getElementById("input-id").value = planetas[i].id;
            document.getElementById("input-galaxia").value = planetas[i].galaxia;
            console.log("Planeta encontrado no índice:", i);
            break;
        }
    }
}
function salvarPlaneta() {
    let id = Number(document.getElementById("input-id").value);

    for (let i = 0; i < planetas.length; i++) {
        if (id == planetas[i].id) {
            planetas[i].nome = document.getElementById("input-nome").value;
            planetas[i].vida = document.getElementById("input-vida").value;
            planetas[i].clima = document.getElementById("input-clima").value;
            planetas[i].distancia = Number(document.getElementById("input-distancia").value);
            planetas[i].galaxia = document.getElementById("input-galaxia").value;
            console.log("Planeta editado no índice:", i);
            break;
        }
    }
    
    mostrarTodos();
    limparFormulario();
}
function excluir() {
    let id = Number(document.getElementById("input-id").value);

    for (let i = 0; i < planetas.length; i++) {
        if (id == planetas[i].id) {
            planetas.splice(i, 1); // Remove 1 item a partir do índice i
            console.log("Planeta removido do índice:", i);
            break;
        }
    }
    
    mostrarTodos();
    limparFormulario();
}
function planetaParaiso() {
    const divParaiso = document.getElementById("planetas-paraiso");
        
    divParaiso.innerHTML = ""; 
    
    let encontrouParaiso = false;

    for (let i = 0; i < planetas.length; i++) {
        
        const textoVida = planetas[i].vida.toLowerCase();
        
        if (textoVida.includes("paraíso") || textoVida.includes("paraiso") || textoVida.includes("sim")) {
            encontrouParaiso = true;
            
            const cardDoPlaneta = document.createElement("div");
            cardDoPlaneta.style.border = "0px"; 
            cardDoPlaneta.style.padding = "10px";
            cardDoPlaneta.style.marginTop = "5px";

            cardDoPlaneta.innerHTML = `
                <div class="planeta-paraiso">
                <strong>Nome:</strong> ${planetas[i].nome} <br>
                <strong>Galáxia:</strong> ${planetas[i].galaxia } <br>
                <strong>Vida:</strong> ${planetas[i].vida} <br>
                <strong>Distância:</strong> ${planetas[i].distancia}
                </div>
            `;
            
            // Corrigido: usando a mesma variável declarada acima (cardDoPlaneta)
            divParaiso.appendChild(cardDoPlaneta);
        }
    }

    if (!encontrouParaiso) {
        divParaiso.innerHTML = "<p>Nenhum planeta paraíso encontrado.</p>";
    }
}