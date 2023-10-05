function showProductList(){
    fetch('https://fakestoreapi.com/products',{
        method: 'GET',
    })
    .then(function(response){
        return response.json();
    })
    .then(function(productRes){
        let htmls = productRes.map((product) => (
            `
            <div class="col-md-12">
                <div class="card mb-3">
                    <div class="row w-50">
                        <div class="col-md-4 position-relative">
                            <img src="${product.image}" alt="" class="img-fluid rounded-start">
                            <div class="position-absolute bottom-0 start-50 translate-middle-x text-success">
                                ${product.price}
                            </div>
                        </div>
                        <div class="col-md-8">
                            <div class="">
                                <h5 class="card-title">
                                    ${product.title}
                                </h5>
                                <p class="card-text">
                                    ${product.description}"$"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
        ))
        document.getElementById('productList').innerHTML = htmls.join('');
    })
    
}