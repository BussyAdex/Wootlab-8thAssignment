$(document).ready(function(){
    $('#searchBtn').click(function(){
        var GetInput = $('#searchText').val();
        GetInput = GetInput.replace(/[^a-zA-Z0-9]/g, "");

    
    var requestOptions = {
    method: 'POST',
    redirect: 'follow'
};
    var see = `http://www.omdbapi.com/?i=tt3896198&apikey=2502782f&s=${GetInput}`;
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=2502782f&s=${GetInput}`,requestOptions)
    //.then(response => response.json())
    .then(function(response){
        return response.json();
    })
    .then(function(result){
        return result.Search;

    })
    .then(function(data) {
        console.log(data);

        data.forEach((item) => {
            var movieTitle = item.Title;
            var movieYear = item.Year;
            var movieImdbID = item.imdbID;
            var movieType = item.Type;
            var moviePoster = item.Poster;

            var div =document.createElement("div");
            var div1 =document.createElement("div");
            var div2 =document.createElement("div");
            var img =document.createElement("img");
            var p1 =document.createElement("p");
            var p2 =document.createElement("p");
            var p3 =document.createElement("p");
            var h2 =document.createElement("h2");

            div.appendChild(div1);
            div.appendChild(div2);
            div1.appendChild(img);
            div2.appendChild(h2);
            div2.appendChild(p1);
            div2.appendChild(p2);
            div2.appendChild(p3);
            
            div.setAttribute("class", "searchResult");
            div1.setAttribute("class", "img-result");
            div2.setAttribute("class", "description-result");
            img.setAttribute("src", moviePoster);
            h2.innerText =movieTitle;
            p1.innerText =movieYear;
            p2.innerText =movieImdbID;
            p3.innerText =movieType; 

            document.getElementById("container").appendChild(div)
        });

    })
});
})