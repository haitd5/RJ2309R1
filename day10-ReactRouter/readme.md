## Đặt tên file ko được viết hoa, từ nối giữa thì hãy dùng dấu '-'

# Cấu trúc một dự án

    - react-webpack # thư mục gốc
    	| src # thư mục chứa source code chính
    		| components # thư mục chứa components
    		| index.js # File khởi tạo, render App vào #root
    	| public
    		| index.html # HTML page, nơi chứa #root element

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

-   react-hook-form
    npm install react-hook-form

-   yub
    npm install @hookform/resolvers yup

---

Nội dung bài học

### Tìm hiểu về hàm

    - Làm gì cho mình :
    - Cần tham số hay không,
    - Trả về cho mình cái gì

### CSS

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');

body {
margin-left: 20px;
font-family: 'Poppins', sans-serif;
}
#### Noi dung bai hoc

1. cai router dom : npm i react-router-dom
2. import vao index.js : import { BrowserRouter } from "react-router-dom";
   root.render(
   <React.StrictMode>
   <BrowserRouter>
   <App />
   </BrowserRouter>
   </React.StrictMode>
   );
3. vao app.js
    import { Route, Routes } from "react-router-dom";

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
    );
    path="/" : phía bên trái / : là root, là domain của web
            phía bên phải là folder, sup-folder

4. dung component 
   import {Link} from "react-router-dom"; de thay cho the a
   import {NavLink} from "react-router-dom"; navlink thi co the tu dong active doi tuong the nao da kich