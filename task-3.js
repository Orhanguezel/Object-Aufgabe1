const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"], 
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};

const keys = ["type", "brand", "price", "colors", "sizes", "material"];
for (let i = 0; i < keys.length; i++) {
  console.log(`${keys[i]}: ${product[keys[i]]}`);
}