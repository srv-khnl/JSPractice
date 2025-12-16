const URL ='https://dummyjson.com/products'

//Single Product
const getSingleProduct = async () => {
    const response = await fetch(`${URL}/1`)
    const data = await response.json()
    console.log(data)
}

//All Products
const getAllProduct = async () => {
const response= await fetch(URL)
const data = await response.json()
console.log(data)
}


//All Product Images
const getAllProductImage = async () => {
    const response = await fetch(URL)
    const data = await response.json()
      for (let i = 0; i < data.products.length; i++) {
        console.log(data.products[i].images)
    }
}

//Product Stock Check
const productStockCheck = async (id) => {
    const response = await fetch(`${URL}/${id}`)
    const data = await response.json()
    console.log(data.stock)
    }

//Total Product Available
const totalProductAvailable = async () => {
    const response = await fetch(URL)
    const data = await response.json()
let count = 0;

for (let i = 0; i < data.products.length; i++) {
  if (data.products[i].availabilityStatus=="In Stock"){
    count++;
  }
}

console.log(count);
}
getAllProduct()
getSingleProduct()
getAllProductImage()
productStockCheck(7)
totalProductAvailable()