import confetti from "canvas-confetti"
export function setupCountdown() {
  function confettiParty() {
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);
  }

  const header = document.querySelector("[data-header]");
  // Set the date we're counting down to
  const date = "Jan 1, 2025 00:00:00";
  // Update the countdown every 1 second
  const daysDisplay = document.querySelector("[data-days]");
  const hoursDisplay = document.querySelector("[data-hours]");
  const minutesDisplay = document.querySelector("[data-minutes]");
  const secondsDisplay = document.querySelector("[data-seconds]");

  const targetDate = new Date(date).getTime();
  let countdownInterval;

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdownInterval);
      daysDisplay.textContent = "00";
      hoursDisplay.textContent = "00";
      minutesDisplay.textContent = "00";
      secondsDisplay.textContent = "00";
      header.innerHTML = `<h1 class="animate-bounce">Happy New Year <span class="bg-gradient-to-tr from-purple-500 to-orange-500 bg-clip-text text-transparent">2025 </span>🎊🎉🥳 !</h1>`;

      // Create dialog element
      const dialog = document.createElement("dialog");
      dialog.classList.add(
        "modal",
        "fixed",
        "top-1/2",
        "left-1/2",
        "transform",
        "-translate-x-1/2",
        "-translate-y-[55%]",
        "bg-white",
        "rounded-lg",
        "shadow-xl",
        "p-6",
        "lg:-translate-y-[85%]"
      );

      // Create dialog content
      const dialogContent = document.createElement("div");
      dialogContent.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">Happy New Year 🎉🥳!</h2>
        <p class="text-lg tracking-wider">Welcome to 2025, dear loved one, may the Lord grant you your resolutions for this year, as you have discussed with him, if it aligns with his own will. God bless you and keep you throughout this year too 💓💗!. Happy New Year 🎉🥳! </p>
      `;
      dialog.appendChild(dialogContent);

      // Add close button
      const closeButton = document.createElement("button");
      closeButton.textContent = "Same to You 🎉🥳!";
      closeButton.classList.add(
        "animate-bounce",
        "mt-4",
        "bg-blue-500",
        "hover:bg-blue-700",
        "text-white",
        "font-bold",
        "py-2",
        "px-4",
        "rounded",
        "w-full",
        "lg:w-fit"
      );
      closeButton.addEventListener("click", () => {
        dialog.close();
        window.close();
      });
      dialogContent.appendChild(closeButton);

      // Show dialog
      document.body.appendChild(dialog);
      dialog.showModal();
      confettiParty()

      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysDisplay.textContent = String(days).padStart(2, "0");
    hoursDisplay.textContent = String(hours).padStart(2, "0");
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  };

  updateCountdown(); // Initial update

  countdownInterval = setInterval(updateCountdown, 1000);
}
