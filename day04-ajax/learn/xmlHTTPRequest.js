function showUseList(){
    const response = new XMLHttpRequest();
    response.onload = function(){
        const userRes = JSON.parse(response.responseText);
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
    }
    response.open("GET", "https://reqres.in/api/users");
    response.send();
}

// JSON.stringify() // chuyển đổi object to json
// JSON.parse() // chuyển đổi json sang object

function showDetaiUser(userID) {
    const response = new XMLHttpRequest();

    response.onload = function() {
        if(response.status == 200 && response.readyState == 4){
            const userRes = JSON.parse(response.responseText);
            $('#user-avatar').attr('src',userRes.data.avatar);
            $('#user-name').html(`${userRes.data.first_name} ${userRes.data.last_name}`);
            $('#user-email').html(userRes.data.email);
            $('#user-detail').modal('show');
            
        }

    }
    response.open("GET", `https://reqres.in/api/users/${userID}`);
    response.send();
}