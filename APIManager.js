//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {user: {picture: '',
                    firstName: '',
                    lastName: '',
                    city: '',
                    state: ''},
                    
                    friends: [],
                    
                    quote: '',
                    
                    pokemon: {name: '',
                            image: ''},
                    
                    txt: ''
        }
    }

    requestUser(){
        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            success: (data) => {
                this.data.user.picture = data.results[0].picture.thumbnail
                this.data.user.firstName = data.results[0].name.first
                this.data.user.lastName = data.results[0].name.last
                this.data.user.city = data.results[0].location.city
                this.data.user.state = data.results[0].location.state
                for(let i = 1; i < 7; i++){
                    this.data.friends.push({firstName: data.results[i].name.first, 
                                            lastName: data.results[i].name.last})
                }
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
          });
    }

    requestQuote(){
        $.ajax({
            url: 'https://api.kanye.rest/',
            dataType: 'json',
            success: (data) => {
                this.data.quote = data.quote
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
          });
    }

    requestPokemon(){
        const rInt = Math.floor(Math.random() * 894)
        $.ajax({
            url: `https://pokeapi.co/api/v2/pokemon/${rInt}`,
            dataType: 'json',
            success: (data) => {
                this.data.pokemon.name = data.name
                this.data.pokemon.image = data.sprites.front_shiny
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
          });
    }

    requestTxt(){
        $.ajax({
            url: 'https://baconipsum.com/api/?type=all-meat',
            dataType: 'json',
            success: (data) => {
                this.data.txt = data[0]
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
          });
    }
}