'use strict'

let widthСentimeters = parseFloat(prompt('Довжина в сантиметрах', ''))

let meter = widthСentimeters / 100
let kilometers = widthСentimeters / 100000

document.write(`

<div class="result">
   метри - ${meter}
</div>

`)
document.write(`

<div class="result">
   кілометри - ${kilometers}
</div>

`)














