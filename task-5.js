const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const newKey = "material";
const newValue = "wool";

product[newKey] = newValue;

keys = ["type", "color", "brand", "price", "material"];

for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]}: ${product[keys[i]]}`);
}

for (const key in product) {
  console.log(`${key}: ${product[key]}`);
}


