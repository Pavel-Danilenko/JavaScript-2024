'use strict'

let secondOfDay = parseInt(prompt('Кількість секунд, що пройшла від початку доби', '0000'))
const secondInHours = 3600
const secondInMinute = 60

//
let hours = secondOfDay / secondInHours
let minutes = secondOfDay % secondInHours / secondInMinute
let seconds = secondOfDay % secondInMinute

//
document.write(`

<ul class="list__container">
   <li>
      Годин - ${Math.floor(hours)}
   </li>
   <li>
     Хвилин - ${Math.floor(minutes)}
   </li>
   <li>
      Секунд - ${Math.floor(seconds)}
   </li>
</ul>

`)















