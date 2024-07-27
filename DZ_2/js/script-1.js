'use srict'

let a = parseFloat(prompt('Введіть значення a', '0'))
const s = 12
let b = parseFloat(prompt('Введіть значення b', '0'))

//
let S1 = a + 12 + b
let S2 = Math.sqrt((a + b) / 2 * a)
let S3 = Math.sin(a / -b)

//результат
document.write(`
<ol class="list__container">
   <li>
      Сума S1 = ${S1}
   </li>
   <li>
      Сума S2 = ${S2}
   </li>
   <li>
      Сума S3 = ${S3}
   </li>
</ol>
`)