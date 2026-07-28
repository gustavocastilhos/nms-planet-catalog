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
            Galaxia: "Euclid"
        },
        {
            id: 102,
            nome: "Doidô-Gamma 4",
            vida: "Não, ambiente hostil",
            clima: "Tempestades tóxicas, Sentinelas Agressivos",
            distancia: 650000,
            Galaxia: "Calypso"

        },
        {
            id: 103,
            nome: "Indium Prime",
            vida: "Sim, base de mineração construída",
            clima: "Chuva fervente extrema",
            distancia: 710000,
            Galaxia: "Hilbert Dimension"
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
