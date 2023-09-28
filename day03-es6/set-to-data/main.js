const animals = [
  { ID: "AN1", Name: "Chicken" },
  { ID: "AN2", Name: "Dog" },
  { ID: "AN3", Name: "Duck" },
  { ID: "AN4", Name: "Tiger" },
  { ID: "AN5", Name: "Mouse" },
];

// kiểm tra ID có tồn tại trong mảng không
function isAnimalInList (id) {
	return animals.some((animal) => animal.ID === id);
}
// console.log(isAnimalInList('AN1'));


// Thêm động vật vào mảng
function addAnimal (id, name){
	const newAnimal = {
		ID: id,
		Name: name,
	}
	if(!isAnimalInList(id)){
		animals.push(newAnimal);
		console.log(`Bạn đã thêm con ${name} vào danh sách`);
	} else{
		console.log(`ID: ${id} đã có trong danh sách`);
	}

}
// addAnimal("AN5","Bird");
// console.log(animals);

// xoá mảng thông qua ID

function removeAnimal(id){
	const indexToRemove = animals.findIndex((animal)=> animal.ID === id);
	if(indexToRemove != -1){
		const removedAnimal = animals.splice(indexToRemove,1);
		console.log(`Đã xoá ${removedAnimal[0].Name} khỏi danh sách.`);
	} else {
		console.log(`Không tìm thấy động vật có ID ${id} trong danh sách`)
	}
}
removeAnimal("AN6");
console.log(animals);


// print animal

function printAnimalList() {
  console.log("Danh sách các loài động vật");
  animals.forEach((animal) => {
    console.log(`ID: ${animal.ID}, Tên: ${animal.Name}`);
  });
}

