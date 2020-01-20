


//consuming the now playing API from movieDB
window.addEventListener("load",()=>{
    const endpoint = "https://api.themoviedb.org/3/movie/now_playing?api_key=4a4dfdafd75d52c7cb24750a886fc7f2&language=en-US&page=1";


    fetch(endpoint)
    .then(res=>{

        res.json()
        .then(data=>{

            const main = document.querySelector("main"); 
            

            for(let i=0; i<data.results.length; i++)
            {
                const div = document.createElement("div");
                div.setAttribute("class","card");

                const hyperLink = document.createElement("a");
                hyperLink.setAttribute("href", "#");
                hyperLink.innerHTML = data.results[i].title + "<br>";


                div.appendChild(hyperLink);

                div.innerHTML+= "<br>" + "Released On: "+data.results[i].release_date + "<br><br>"
                div.innerHTML+= "<br>" + data.results[i].overview + "<br><br>";
                

                const dynamicallyCreatedImg = document.createElement("img");

                const baseURL ="https://image.tmdb.org/t/p/w185_and_h278_bestv2";
                dynamicallyCreatedImg.setAttribute("src", baseURL+data.results[i].poster_path)

                dynamicallyCreatedImg.onclick = ()=>{
                sessionStorage.setItem("movieId", data.results[i].id);
                location.href = "movieDetails.html";
                
                };

               div.appendChild(dynamicallyCreatedImg)

               main.appendChild(div)


               //Modify CSS properties via JS
               div.style.padding = "1rem 5rem 0 3rem";
               div.style.border = "1px orange solid";



            }

        })
        
    })
})