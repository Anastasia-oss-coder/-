document.addEventListener("DOMContentLoaded", () => {
  // Повідомлення при натисканні "Замовити"
  document.querySelectorAll(".order-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const name = btn.dataset.name;
      const price = btn.dataset.price;
      alert(`✅ Дякуємо! Ви замовили: ${name} (${price}). Ми зв’яжемось з вами!`);
    });
  });

  // Обробка форми підтримки
  const form = document.getElementById("support-form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      alert("💌 Ваше повідомлення успішно відправлено! Ми скоро відповімо.");
      form.reset();
    });
  }
});
