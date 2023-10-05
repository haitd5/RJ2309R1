function showUseList(){
    fetch('https://reqres.in/api/users',{
        method: 'GET',
    })
    .then(function(response){
        return response.json()
    })
    .then(function(userRes){
        let htmls = userRes.data.map((user) => (
            `
            <div class="col-md-3 my-2">
                <div class="card">
                    <img src="${user.avatar}" alt="" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${user.first_name} ${user.ast_name}</h5>
                        <p class="card-text">${user.email}</p>
                    </div>
                    <div class="card-footer">
                        <button class="btn btn-dark" onclick="showDetailUser(${user.id})">Views</button>
                    </div>
                </div>

            </div> 
            `
            ))
        document.getElementById('userList').innerHTML = htmls.join('');
    })
}

// function showDetailUser(userID){
//     fetch(`https://reqres.in/api/users/${userID}`, {
//         method: 'GET',
//     })
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(userRes){
//         $('#user-avatar').attr('src',userRes.data.avatar);
//         $('#user-name').html(`${userRes.data.first_name} ${userRes.data.last_name}`);
//         $('#user-email').html(userRes.data.email);
//         $('#user-detail').modal('show');
//     })
// }

// su dung async 

async function showDetailUser(userID){
    let response = await fetch(`https://reqres.in/api/users/${userID}`, {
        method: 'GET',
    })
    
    let userRes = await response.json();
    
    $('#user-avatar').attr('src',userRes.data.avatar);
    $('#user-name').html(`${userRes.data.first_name} ${userRes.data.last_name}`);
    $('#user-email').html(userRes.data.email);
    $('#user-detail').modal('show');
    
}