$( document ).ready(function() {
    fillImg();
    
});

function fillImg(){
    let num = document.getElementById("aCurrentPage").textContent;
    let img = document.querySelectorAll("a img");
    for(let i=0; i<img.length; i++){
        img[i].src=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${(num-1)*30+i+1}.png`;
        img[i].id = `${(num-1)*30+i+1}`;
    }
}

function createWindownContent(component){
    let url = `https://pokeapi.co/api/v2/pokemon/${component.id}/`;
    $.ajax({
        data: {},
        type: "GET",
        dataType: "json",
        url:  url
    }).done(( res ) => {
        let name = document.getElementById("namePokemon");
        let img = document.getElementById("imgPokemon");
        let id = document.getElementById("idItem");
        let height = document.getElementById("heightItem");
        let weight = document.getElementById("weightItem");
        name.innerHTML = component.id + ".-" + titleCase(res.species.name);
        img.src = component.src;
        id.textContent = res.id;
        height.textContent = res.height/10 + " m";
        weight.textContent = res.weight/10 + " Kg";
        
        for(let i = 0; i < 2; i++){
            let li = document.getElementById(`typeItem-${i+1}`); 
            if(res.types[i]){
                li.textContent = titleCase(res.types[i].type.name);
            }
            else{
                 li.textContent = ""
            }
            
        }
       
        for(let i = 0; i < 4; i++){
            let li = document.getElementById(`abilityItem-${i+1}`);
            if(res.abilities[i]){
                li.textContent = titleCase(res.abilities[i].ability.name);
            }
            else{
                 li.textContent = ""
            }
            
        }
        
        for(let i = 0; i < 4; i++){
            let li = document.getElementById(`movesItem-${i+1}`);
            if(res.moves[i]){
                li.textContent = titleCase(res.moves[i].move.name);
            }
            else{
                 li.textContent = ""
            }
            
        }
        
    }).fail(( err)  => {
        console.log(err)
    });
}

function newPage(component){
    let currentPage = document.getElementById("aCurrentPage");
    if(component.id === "aPreviousPage" && parseInt(currentPage.textContent) - 1 != 0){
        currentPage.textContent = parseInt(currentPage.textContent) - 1;
    }
    else if(component.id === "aNextPage"){
        currentPage.textContent = parseInt(currentPage.textContent) + 1;
    }
    fillImg();
}

function titleCase(str) {
  let temp = [];
  str = str.toLowerCase()
  str = str.split(' ')
  str.forEach(palabra => {
    palabra = palabra.replace(String.fromCharCode(palabra.charCodeAt(0)), String.fromCharCode(palabra.charCodeAt(0)-32))
    temp.push(palabra)
  })
  str = ""
  temp.forEach(palabra => str += palabra + " ")
  str = str.slice(0,-1);
  return str;
}