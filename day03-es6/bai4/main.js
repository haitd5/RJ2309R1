/**
Xây dựng lớp Person gồm thuộc tính name, constructor. Sử dụng hàm get, set để cài đặt thuộc tính name. Xây dựng phương thức walk để mô tả việc di chuyển của lớp Person.

Lớp Programmer kế thừa lớp Person, sử dụng hàm get và set để cài đặt ngôn ngữ lập trình của Programmer. Viết thêm phương thức writeCode.

Khai báo các đối tượng thuộc lớp Programmer và gọi các hàm của lớp Person và Programmer. Quan sát kết quả.
 */

class Person {
    constructor(name){
        this.name = name;
    }
    getname(){
        return this.name;
    }
    setname(newName){
        this.name = newName;
    }
    walk(){
        console.log(`${this.name} is walking`);    
    }
}

class Programmer extends Person {
    constructor(name, programmerLanguage){
        super(name);
        this.programmerLanguage = programmerLanguage;
    }
    getProgrammerLanguage(){
        return this.programmerLanguage;
    }
    setProgrammerLanguage(newProgrammerLanguage){
        this.programmerLanguage = newProgrammerLanguage;
    }
    writeCode(){
        console.log(`${this.name} is ${this.programmerLanguage} writing code`);
    }
}

const programmer = new Programmer('hai','JS');
programmer.walk();
programmer.writeCode();

programmer.name = 'Cuong';
console.log(`New name: ${programmer.name}`);


