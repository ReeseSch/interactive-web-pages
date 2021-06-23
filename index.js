// console.log('hello world')

let message = document.querySelector(`#message`)


function addMovie(event){
    event.preventDefault()
    let inputField = document.querySelector('input')
        if(inputField.value !== ``) {

            let movie = document.createElement(`li`)
            
            let movieTitle = document.createElement(`span`) 
            movieTitle.textContent = inputField.value
            movieTitle.addEventListener(`click`, crossOffMovie)
            movie.appendChild(movieTitle)

            let deleteBtn = document.createElement(`button`)
            deleteBtn.textContent = `X`
            deleteBtn.addEventListener(`click`, deleteMovie)
                movie.appendChild(deleteBtn)


            document.querySelector(`ul`).appendChild(movie)
            inputField.value = ""
        }
}


document.querySelector(`form`).addEventListener(`submit`, addMovie)

function deleteMovie(event) {
        message.textContent = `${event.target.parentNode.children[0].textContent} was lame anyways`
        event.target.parentNode.remove()

    revealMessage()
}

function crossOffMovie(event) {
    event.target.classList.toggle(`checked`)
    if (event.target.classList.contains(`checked`)) {
        message.textContent = `${event.target.textContent} was dope`
    } else {
        message.textContent = `Are you really going to watch ${event.target.textContent} again?`
    }
    revealMessage()
}

function revealMessage(){
    message.classList.remove(`hide`)
    setTimeout(() => {message.classList.add(`hide`)}, 2000)
}