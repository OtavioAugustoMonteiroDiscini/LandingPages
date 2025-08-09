AOS.init();

// Elemento do contador
const countdownEl = document.getElementById('countdown');

const endDate = new Date();
endDate.setMonth(endDate.getMonth() + 1);
endDate.setDate(0);
endDate.setHours(23, 59, 59);

function updateCountdown() {
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    countdownEl.textContent = "🎊 Promoção encerrada!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownEl.textContent = `⏳ Faltam ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
