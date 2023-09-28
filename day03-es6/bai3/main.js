/**

Xây dựng lớp thông tin gồm các thuộc tính tên, mô tả và hàm tính toán có 1 tham số  mặc định có giá trị bằng 1, hàm này tăng gấp 3 lần giá trị của tham số truyền vào.

Xây dựng lớp hình học kế thừa từ lớp trên. Có các thuộc tính là chiều dài, mô tả và hàm tính toán với 1 tham số truyền vào.

Tạo các đối tượng của lớp hình học và gọi các thuộc tính của lớp đó, các thuộc tính của lớp cha, và hàm để quan sát kết quả.
*/

class Imformation {
    constructor(name, description){
        this.name = name;
        this.description = description;
    }
    tinhToan(giaTri = 1){
        return giaTri * 3;
    }
}
class HinhHoc extends Imformation {
    constructor(name, description, chieuDai){
        super(name, description);
        this.chieuDai = chieuDai;
    }

    tinhToanchild(giaTri){
        const ketQuaLopCha = super.tinhToan(giaTri);
        return this.chieuDai * ketQuaLopCha;
    }
}

// create
const hinhHoc = new HinhHoc('hình vuông', 'hình vuông có 4 cạnh bằng nhau', 5);
const hinhHoc2 = new HinhHoc('hình tròn', 'hình tròn có bán kính', 2);

// goi phuong thuc

console.log(`Name: ${hinhHoc.name}`);
console.log(`Description: ${hinhHoc.description}`);
console.log(`chiều dài: ${hinhHoc.chieuDai}`);
console.log(`kết quả tính toán: ${hinhHoc.tinhToanchild(5)}`);

// goi lop cha
console.log('----------------------------------------------------------------');

console.log(`Kết quả tính toán của lớp cha: ${hinhHoc.tinhToan()}`);
console.log(`Tên của lớp cha: ${hinhHoc.name}`);
console.log(`Mô tả của lớp cha ${hinhHoc.description}`);

console.log('----------------------------------------------------------------');

console.log(`Name: ${hinhHoc2.name}`);
console.log(`Description: ${hinhHoc2.description}`);
console.log(`chiều dài: ${hinhHoc2.chieuDai}`);
console.log(`kết quả tính toán: ${hinhHoc2.tinhToanchild(5)}`);

// goi lop cha
console.log('----------------------------------------------------------------');

console.log(`Kết quả tính toán của lớp cha: ${hinhHoc2.tinhToan()}`);
console.log(`Tên của lớp cha: ${hinhHoc2.name}`);
console.log(`Mô tả của lớp cha ${hinhHoc2.description}`);