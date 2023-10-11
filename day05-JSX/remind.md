## Đặt tên file ko được viết hoa, từ nối giữa thì hãy dùng dấu '-'

# Cấu trúc một dự án
    - react-webpack # thư mục gốc
        | src # thư mục chứa source code chính
            | components # thư mục chứa components
            | index.js # File khởi tạo, render App vào #root
        | public
            | index.html # HTML page, nơi chứa #root element

# Các bước cài đặt
Mở terminal tại thư mục.

- B1: Cài đặt, khởi tạo dự án với Node
    dùng câu lệnh: npm init --y (enter)
    -> sinh ra file 'package.json'

- B2: Cài đặt webpack
    dùng câu lệnh: npm install webpack webpack-cli --save-dev (enter)
    -> sinh ra file 'package-lock.json' và folder 'node_modules'

- B3: Cài đặt React và React-DOM
    dùng câu lệnh: npm install react react-dom --save (enter)

- B4: Cài đặt Babel
    dùng câu lệnh: npm install @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

- B5: Tạo thư mục pubic, src, index.html, index.js sao cho đúng cấu trúc.

- B6: Cấu hình webpack
    dùng câu lệnh: npm install css-loader style-loader --save-dev (enter)

- B7: Tạo file webpack.config.js
    sau đó coppy đoạn này vào trong đó.

    const path = require("path");
        module.exports = {
        entry: "./src/index.js", // Dẫn tới file index.js ta đã tạo
        output: {
            path: path.join(__dirname, "/build"), // Thư mục chứa file được build ra
            filename: "bundle.js" // Tên file được build ra
        },
        module: {
            rules: [
            {
                test: /\.js$/, // Sẽ sử dụng babel-loader cho những file .js
                exclude: /node_modules/, // Loại trừ thư mục node_modules
                use: ["babel-loader"]
            },
            {
                test: /\.css$/, // Sử dụng style-loader, css-loader cho file .css
                use: ["style-loader", "css-loader"]
            }
            ]
        },
        // Chứa các plugins sẽ cài đặt trong tương lai
        plugins: [
        ]
    };

    - B8: tạo file '.babelrc'
        rồi coppy đoạn dưới vào bên trong nó.
        {
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react"
            ]
        }
    
    - B9: coppy đoạn sau :

        "start": "webpack --mode development --watch",
        "build": "webpack --mode production"

        mở package.json tìm đến "scripts": rồi coppy đoạn trên vào.

    - B10: sau đó chạy :
        npm start -> sẽ tạo ra thư mục build
    
    RỒi sau đó srcipt 'bundle.js' vào trong index.html

    - B11: để ko cần phải thêm srcipt 'bundle.js' vào index.html thì 

        dùng câu lệnh: npm install html-webpack-plugin --save-dev (enter)

    - B12: sau đó mở file 'webpack.config.js' cấu hình thêm
        coppy đoạn này : 
            const HtmlWebpackPlugin = require("html-webpack-plugin");
        vào file 'webpack.config.js'

        và coppy đoạn này: 
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            })
        vào 'plugins:'

    - B13: cài đặt webpack-dev-server
        dùng câu lệnh: 
            npm install webpack-dev-server --save-dev
        
        sau khi cài xong thì thay dổi lại phương thức start trong package.json

        từ:
            "start": "webpack --mode development --watch",
        thành: 
            "start": "webpack-dev-server --mode development --open --hot",
    - B14: dùng câu lệnh :
            npm run build
        để tạo ra một index.html ảo tròng file build







