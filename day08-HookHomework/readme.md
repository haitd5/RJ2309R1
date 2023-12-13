## Đặt tên file ko được viết hoa, từ nối giữa thì hãy dùng dấu '-'

# Cấu trúc một dự án

    - react-webpack # thư mục gốc
    	| src # thư mục chứa source code chính
    		| components # thư mục chứa components
    		| index.js # File khởi tạo, render App vào #root
    	| public
    		| index.html # HTML page, nơi chứa #root element

### CSS

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

body {
margin-left: 20px;
font-family: 'Poppins', sans-serif;
}

### thu vien ho tro tao templates nhanh hon

-   Dung cra để tạo dự án
    tại thư mục mình cần làm dự án thì mình viết câu lệnh sau:
    npx create-react-app <project-name>
    ví dụ: npx create-react-app cra-app

-   Dùng vite để tạo dự án thì làm cách như sau:
    tại thư mục mình cần làm dự án thì mình viết câu lệnh sau:
    npm create vite@latest

-   npm font awesome free
    npm i @fortawesome/fontawesome-free

-   npm bosstrap 5
    npm i bootstrap@5.0.1

---

Nội dung bài học

-   useEffect
    là hàm có hai đối số, đối số thứ. nhất là callback đối số thứ hai là deps
    có 3 trường hợp sử dung
    useEffect(callback)
    callback sẽ được gọi lại mỗi khi cặp state
    useEffect(callback, [])
    callback chỉ được gọi một lần khi moun vào DOM
    useEffect(callback, [deps])

--- chức năng:
side effects (những tác động bên cạnh) ưu tiên hiển thị giao diện nên nó sẽ hiện ra sau.
call API
update DOM
setInteval, setTimeout
listen event DOM

--- input: callback, dependecy
--- output: ko có gì cả (void)

--- cách dùng :

Nguyễn tắc chúng:

1. callback luôn được gọi khi component được mounted vào DOM
2. component UI sẽ được render -> callback gọi
