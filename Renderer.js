
class Renderer {

    renderUser(user){
        $('.user-container').empty()
        const source = $("#user-template").html()
        const template = Handlebars.compile(source)
        const userHTML = template(user.user)
        $('.user-container').append(userHTML)    
    }

    renderFriends(friends){
        $('.friends-container').empty()
        const friendsObj = {friends}
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)
        const friendsHTML = template(friendsObj)
        $('.friends-container').append(friendsHTML) 
    }

    renderQuote(quote){
        $('.quote-container').empty()
        const quoteObj = {quote}
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const quoteHTML = template(quoteObj)
        $('.quote-container').append(quoteHTML)
    }

    renderPokemon(pokemon){
        $('.pokemon-container').empty()
        const source = $("#pokemon-template").html()
        const template = Handlebars.compile(source)
        const pokemonHTML = template(pokemon)
        $('.pokemon-container').append(pokemonHTML)
    }

    renderTxt(txt){
        $('.meat-container').empty()
        const txtObj = {txt}
        const source = $("#meat-template").html()
        const template = Handlebars.compile(source)
        const txtHTML = template(txtObj)
        $('.meat-container').append(txtHTML)
    }
}