const searchInput =document.getElementById("searchInput");
const searchResult =document.querySelector(".result");



async function movieBox() {
    const apiKey ="a3b12933";
    const movieName = searchInput.value;
    let res= await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`);
    let data = await res.json();
    console.log(data);

    searchResult.innerHTML="";

    if(data.Response==="True"){
      let movies = data.Search;
      movies.map(movie=>{
        let img =document.createElement("img");
        img.src=movie.Poster !== "N/A" ? movie.Poster :"https://img.freepik.com/free-photo/blank-horizontal-photo-frame-10-x-15-size-with-soft-shadows-tape-isolated-white-paper-background_211682-72.jpg?w=360" ;
        searchResult.appendChild(img);
      })  
      
    }
    else{
     alert("Movie not found")
    }
    
    
}
function changeIcon(){
    const setting =document.getElementById("setting");
    const userDetails =document.getElementById("userDetails");

    userDetails.style.display=userDetails.style.display==="flex"?"none":"flex";
    setting.classList.toggle("fa-bars");
    setting.classList.toggle("fa-xmark");
    setting.classList.toggle("rotate");
    console.log("Icon Click");
    
}
searchInput.addEventListener("keydown",(e)=>{
  if(e.key === "Enter") movieBox();
});


  



