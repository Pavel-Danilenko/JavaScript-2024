'use strict'
//ціна товару 1
let priceProduct1 = parseFloat(prompt('Введіть вартість першого товару', '0.0'))
//ціна товару 2
let priceProduct2 = parseFloat(prompt('Введіть вартість другого товару', '0.0'))
//ціна товару 3
let priceProduct3 = parseFloat(prompt('Введіть вартість третього товару', '0.0'))

//кількість товару 1
let product1 = parseInt(prompt('Введіть кількість першого товару', '1'))
//кількість товару 2
let product2 = parseInt(prompt('Введіть кількість другого товару', '1'))
//кількість товару 3
let product3 = parseInt(prompt('Введіть кількість третього товару', '1'))

//перший товар
let ForFirstProduct = (product1 * priceProduct1)

//другий товар
let ForSecontProduct = (product2 * priceProduct2)

//третій товар
let ForThirdProduct = (product3 * priceProduct3)

//Загальна сума
let totalPrice = ForFirstProduct + ForSecontProduct + ForThirdProduct


//Результат
document.write(`

<ul class="list__container">
   <li>
      Товар  №1 > ${priceProduct1.toFixed(2)} * ${product1.toFixed(2)} = ${ForFirstProduct.toFixed(2)}
   </li>
   <li>
      Товар  №2 > ${priceProduct2.toFixed(2)} * ${product2.toFixed(2)} = ${ForSecontProduct.toFixed(2)}
   </li>
   <li>
      Товар  №3 > ${priceProduct3.toFixed(2)} * ${product3.toFixed(2)} = ${ForThirdProduct.toFixed(2)}
   </li>
   <li>
      Загальна сума = ${totalPrice.toFixed(2)}
   </li>
</ul>

`)














