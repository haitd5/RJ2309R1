/**
1. Viết hàm tạo ra mảng numbers có kích cỡ size, và các giá trị của mảng được sinh ngẫu nhiên trong [10, 60]
2. Viết hàm hiển thị mảng numbers ra màng hình
3. Viết hàm đếm xem trong mảng numbers có bao nhiêu số chẵn
4. Viết hàm đếm xem trong mảng numbers có bao nhiêu số nguyên tố
5. Viết hàm tính tổng các phần tử có trong mảng numbers
 */

function generateRandomArray(size) {
  const numbers = [];
  for (let i = 0; i < size; i++) {
    const randomValue = Math.floor(Math.random() * (60 - 10 + 1)) + 10;
    numbers.push(randomValue);
  }
  return numbers;
}

function countEvenNumber(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      count++;
    }
  }
  return count;
}

function isPrime(num) {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num - 1; i++) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

function countPrimes(numbers) {
  let primeCount = 0;
  for (const num of numbers) {
    if (isPrime(num)) {
      primeCount++;
    }
  }
  return primeCount;
}

function sumArray(numbers) {
  let sumArray = 0;
  for (const num of numbers) {
    sumArray += num;
  }
  return sumArray;
}

const size = 10; // Thay đổi kích thước mảng tùy ý
const randomArray = generateRandomArray(size);
console.log("Mảng numbers : " + randomArray);
console.log("So chan: " + countEvenNumber(randomArray));
console.log("So nguyen to: " + countPrimes(randomArray));
console.log("Tong: " + sumArray(randomArray));
