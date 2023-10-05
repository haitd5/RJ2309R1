## ================ AJAX ==================

1. UI   = User interface            => user tương tác với system thông qua giao diện
2. CLI  = CommandLine interface     => user tương tác với system thông qua dòng lệnh
3. API  = Application Programing interface  => system tương tác tới system.

### List of HTTP status codes
    - 1xx informational response : thông tin gì đó 
    - 2xx success : thành công
    - 3xx redirection : điều hướng thông tin 
    - 4xx client errors : lỗi từ hướng clinet
    - 5xx server errors : lỗi từ hướng server

### lấy api sử dụng xmlHTTPrequest

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // Typical action to be performed when the document is ready:
        document.getElementById("demo").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "filename", true);
    xhttp.send();

- phương thức GET : truy cập, truy xuất tài nguyên đã có sẵn
- phương thức POST : bổ sung, thêm mới tài nguyên
- phương thức PUT / PATCH : cập nhật toàn phần hay toàn bộ.
- phương thức DELETE : xoá 

- JSON.stringify() // chuyển đổi object to json
- JSON.parse() // chuyển đổi json sang object