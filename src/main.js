import "./style.css";

import { setupCountdown } from "./countdown.js";

document.querySelector("#app").innerHTML = `
 <main class="m-20 flex items-center justify-center flex-col">
   <h1 class="text-6xl font-black text-center" data-header>It's almost <span class="bg-gradient-to-tr from-purple-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">2025!</span></h1>
   <div class="mt-32">
    <!-- Add the countdown component here -->
    <h1 class="text-2xl font-black tracking-wide text-center">Countdown to 2025!!</h1>
    <div id="counter" class="flex flex-col items-center justify-center gap-5 md:flex-row">
      <div class="flex flex-col items-center justify-center gap-1 md:flex-row">
        <span class="text-6xl md:text-[120px] lg:text-[160px] font-bold bg-gradient-to-tr from-purple-500 to-orange-500 bg-clip-text text-transparent" id="days" data-days>00</span>
        <span class="text-xl font-bold">Days</span>
      </div>
      <div class="flex flex-col items-center justify-center gap-1 md:flex-row">
        <span class="text-6xl md:text-[120px] lg:text-[160px] font-bold bg-gradient-to-tr from-purple-500 to-orange-500 bg-clip-text text-transparent" id="hours" data-hours>00</span>
        <span class="text-xl font-bold">Hours</span>
      </div>
      <div class="flex flex-col items-center justify-center gap-1 md:flex-row">
        <span class="text-6xl md:text-[120px] lg:text-[160px] font-bold bg-gradient-to-tr from-purple-500 to-orange-500 bg-clip-text text-transparent" id="minutes" data-minutes>00</span>
        <span class="text-xl font-bold">Minutes</span>
      </div>
      <div class="flex flex-col items-center justify-center gap-1 md:flex-row">
        <span class="text-6xl md:text-[120px] lg:text-[160px] font-bold bg-gradient-to-tr from-purple-500 to-orange-500 bg-clip-text text-transparent" id="seconds" data-seconds>00</span>
        <span class="text-xl font-bold">Seconds</span>
      </div>
    </div>
   </div>
 </main>
`;

setupCountdown(document.querySelector("#counter"));
