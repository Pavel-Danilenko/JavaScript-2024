'use srict'

let a = parseFloat(prompt('Введіть число а', '0'))
let b = parseFloat(prompt('Введіть число b', '0'))

//
let sum = a + b
let product = a * b
let share = a / b

//

document.write(`

<ul class="list__container">
   <li>
      сума = ${sum}
   </li>
   <li>
      добуток = ${product}
   </li>
   <li>
      частк = ${share}
   </li>
</ul>

`)
