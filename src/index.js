document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
})

function fetchDogs() {
    fetch('http://localhost:3000/dogs')
        .then(res => res.json())
        .then(json => json.forEach(renderDogs))
}

function renderDogs(dog) {
    let tr = document.createElement('tr')
    document.querySelector("#table-body").append(tr)
    tr.className = `dog-frame-${dog.id}`

    let tdName = document.createElement('td')
    let tdBreed = document.createElement('td')
    let tdSex = document.createElement('td')
    let tdButton = document.createElement('td')
    let editBtn = document.createElement('button')

    tdName.textContent = dog.name 
    tdBreed.textContent = dog.breed 
    tdSex.textContent = dog.sex

    editBtn.textContent = "Edit Dog"
    tdButton.appendChild(editBtn)
    editBtn.className = `edit-button-${dog.id}`

    document.querySelector(`.dog-frame-${dog.id}`).append(tdName, tdBreed, tdSex, tdButton)

    function formFunction() {
        document.querySelector('input[name="name"]').value = dog.name
        document.querySelector('input[name="breed"]').value = dog.breed
        document.querySelector('input[name="sex"]').value = dog.sex
    }

    document.querySelector(`.edit-button-${dog.id}`).addEventListener('click', () => {
        formFunction()
    })

    


}




// let dogTable = document.getElementById("table-body")
// let row = dogTable.insertRow(dog)