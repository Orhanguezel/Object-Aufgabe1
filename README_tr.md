```md
## Görevler

### Görev 1

Aşağıdaki JavaScript objesine göre:

```js
const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};
```

- `key` adında yeni bir değişken oluşturun
- bu değişkene yukarıdaki objede yer alan özellik adlarından birinin ismini atayın
- yeni oluşturduğunuz değişkeni ve köşeli parantez notasyonunu kullanarak, seçtiğiniz özelliğin değerini yazdırın

#### Bonus:

Eğer obje içinde bulunmayan bir özellik adı kullanırsanız ne olur? Çıktı ne olur?

### Görev 2

Aşağıdaki JavaScript objesi ve objedeki `özellik` isimlerini içeren bir diziye göre:

```js
const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const keys = ["type", "color", "brand", "price"];
```

Bir döngü yazarak, her bir özellik adını ve objedeki ilgili değerini yazdırın.

Beklenen çıktı:

```plaintext
type: t-shirt
color: green
brand: Awesome Tees
price: 19.99
```

### Görev 3

Aşağıdaki JavaScript objesine göre:

```js
const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"], 
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};
```

- obje özellik adlarını bir diziye kaydetmek için bir yöntem kullanın
- her bir özellik adını ve objedeki ilgili değeri yazdırmak için bir döngü kullanın

Beklenen çıktı:

```plaintext
type: t-shirt
brand: Awesome Tees
price: 19.99
colors: green,yellow,pink
sizes: S,M,L
material: organic cotton
```

### Görev 4

Aşağıdaki JavaScript objesine ve string dizisine göre:

```js
const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"], 
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};

const keys = ["type", "brand", "id", "material", "details"];
```

- her bir özellik adını ve objedeki ilgili değeri yazdırmak için bir döngü kullanın
- obje belirtilen anahtarı içermiyorsa, şu gibi bir mesaj yazdırın: `The product doesn't have the "id" property`

Beklenen çıktı:

```
type: t-shirt
brand: Awesome Tees
The product doesn't have a "id" property
material: organic cotton
The product doesn't have a "details" property
```

### Görev 5

Aşağıdaki JavaScript objesine ve objeye eklemek istediğiniz iki string (yeni bir anahtar ve yeni bir değer) göre:

```js
const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const newKey = "material";
const newValue = "wool";
```

- sağlanan değişkenleri kullanarak objeye `material` adında bir özellik ekleyin ve `wool` değerini atayın
- objenin tüm anahtarlarını `keys` adlı bir diziye kaydedin
- her anahtarı ve ilgili değerini yazdırmak için bir döngü kullanın

Beklenen çıktı:

```
type: t-shirt
color: green
brand: Awesome Tees
price: 19.99
material: wool
```
```