'use strict'

let minPlace = 1
let maxPlace = 12

let minNumberDay = 0
let maxNumberDay = 6

let randomPlace = Math.floor(Math.random() * (maxPlace - minPlace + 1) + minPlace)
let randomDay = Math.floor(Math.random() * (maxNumberDay - minNumberDay + 1) + minNumberDay)

document.write(`

<ul class="list__container">
   <li>
      Випадковий номер місця ${randomPlace}
   </li>
   <li>
      Випадковий день ${randomDay}
   </li>
</ul>

`)














