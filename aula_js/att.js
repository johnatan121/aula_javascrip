

const addBtn = document.getElementById('addBtn');

const attList = document.getElementById('attList')



function adicionarItem() {
    const attInput = document.getElementById('attinput');
    const valor = attInput.value
    console.log(valor)

    const novaTarefa = document.createElement("li")

    novaTarefa.classList.add("item-tarefa")

    novaTarefa.textContent = valor
    attList.appendChild(novaTarefa)

    }



    attList.addEventListener('click', function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("tarefa-concluida")
        }
    })

    addBtn.addEventListener('click', adicionarItem)
        

