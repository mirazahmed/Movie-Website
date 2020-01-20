



window.addEventListener("load",()=>{
    
    const movieId = sessionStorage.getItem("movieId");

    //consumption of a specific movie trailer API from movieDB
    const endpoint = "https://api.themoviedb.org/3/movie/"+movieId+"/videos?api_key=4a4dfdafd75d52c7cb24750a886fc7f2&language=en-US";

    //consumption of a specific movie details API from movieDB
    const endpoint1 = "https://api.themoviedb.org/3/movie/"+movieId+"?api_key=4a4dfdafd75d52c7cb24750a886fc7f2&language=en-US";
    
    fetch(endpoint1)
    .then(res=>{

        res.json()
        .then(data=>{

            const main = document.querySelector("main");
            const section = document.querySelector("section");


            //2 Divs created for the purpose of displaying in CSS grid
            const div1 = document.createElement("div");
            const div2 = document.createElement("div");

            const dynamicallyCreatedImg = document.createElement("img");
            const baseURL ="https://image.tmdb.org/t/p/w185_and_h278_bestv2";
            dynamicallyCreatedImg.setAttribute("src",baseURL+data.poster_path);
            dynamicallyCreatedImg.setAttribute("id","moviePoster");
            div1.appendChild(dynamicallyCreatedImg);
            div2.setAttribute("class","card");
            
            div2.innerHTML+= '<h2>' + data.original_title + '</h2>' + "<br>";
            div2.innerHTML+= '<p>' + "Synopsis : " + data.overview + '</p>' + "<br>";
            div2.innerHTML+= '<p>' + "Date of Release : " + data.release_date + '</p>' + "<br>";
            

            section.appendChild(div1);
            section.appendChild(div2);
            
            section.style.height = "80vh";
            section.style.backgroundColor = "#423938";
            
            section.style.display ="grid";
            section.style.gridTemplateColumns = "1fr 1fr";
            

            dynamicallyCreatedImg.style.height = "60vh";
            dynamicallyCreatedImg.style.padding = "1rem 1rem 2rem 7rem";
            
            div2.style.color = "white";

            div2.style.padding = "3rem 2rem 2rem 0";

            
        })
    })





    fetch(endpoint)
    .then(res=>{

        res.json()
        .then(data=>{

            const section = document.querySelector("section");
            const hyperLink = document.createElement("a");
           
           
            hyperLink.setAttribute("class", "fas fa-play");
            hyperLink.setAttribute("href", "https://www.themoviedb.org/movie/"+movieId+"#play="+data.results[0].key+"");
            
                      
            hyperLink.innerHTML = "  Play Trailer"+"<br> <br>";



            hyperLink.style.textDecoration = "none";
            hyperLink.style.color = "white";


            const h1 = document.querySelector(".card");

            h1.appendChild(hyperLink);
            section.appendChild(h1);

        })
        
    })
  
})

