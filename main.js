
const myAPI = new APIManager()
const render = new Renderer()

const load = function(){
    myAPI.requestUser()
    myAPI.requestQuote()
    myAPI.requestPokemon()
    myAPI.requestTxt()
}

const display = function(){
    render.renderUser(myAPI.data)
    render.renderFriends(myAPI.data.friends)
    render.renderQuote(myAPI.data.quote)
    render.renderPokemon(myAPI.data.pokemon)
    render.renderTxt(myAPI.data.txt)
}

setTimeout(display, 10000) 