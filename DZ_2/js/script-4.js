'use strict'

let unitCost = parseFloat(prompt('Вартість одиніці товару', '0.00'))
let amout = parseInt(prompt('Кількість товара', '0'))
const costOfVat = 5

//
let totalPrice = unitCost * amout
let priceWithVat = totalPrice * costOfVat / 100

//

document.write(`

<ul class="list__container">
   <li>
      Загальна вартість = ${totalPrice}
   </li>
   <li>
      5% від загальної вартості = ${priceWithVat}
   </li>
</ul>

`)