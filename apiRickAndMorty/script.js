fetch("https://rickandmortyapi.com/api/character")
.then((response)=> response.json())
.then((data) =>{

  const container = document.querySelector("#container")

  data.results.map((results)=>{
    console.log(results)
    container.innerHTML += `
      <div class="character"> 
        <img src="${results.image}" ></img> 
        <h1 class="character-name"> ${results.name} </h1>
        <div class="characteristics">
          <h4 class="character-species"> ${results.species} </h4>
          <h4 class="character-location"> ${results.location.name} </h4>
          <h4 class="character-status"> ${results.status} </h4>
        </div>  
      </div>`
  })
})