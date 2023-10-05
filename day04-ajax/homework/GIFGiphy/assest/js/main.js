function sendApiRequest(){
    const userInput = document.getElementById('input').value;
    console.log(userInput);

    const giphyApiKey = '4MIjJiovAjgtm67t7KXBGqkTSrBeSJeY';
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`;

    fetch(giphyApiURL, {
        method: 'GET',
    })
    .then (function(response){
        return response.json();
    })
    .then (function(imgRes){
        console.log(imgRes.data[0].images.fixed_height.url);
        const imgPath = imgRes.data[0].images.fixed_height.url;
        const img = document.createElement('img');
        img.setAttribute('src', imgPath);
        document.body.appendChild(img)
    })
    reset();
}

function removeImg(){
    let imgRemove = document.querySelectorAll('img');
    // console.log(imgRemove);
    for (const del of imgRemove){
        del.remove();
    }
    
}
function reset(){
    document.getElementById('input').value = '';
}