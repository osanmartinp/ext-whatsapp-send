document.addEventListener("DOMContentLoaded", () => {
  const sendBtn = document.getElementById("sendBtn");
  const phoneInput = document.getElementById("phone");

  sendBtn.addEventListener("click", () => {
    let phone = phoneInput.value.trim();
    phone = phone.replace(/[^0-9]/g, "");

    // Validar que el número no esté vacío y que sea un número válido
    if (!phone || isNaN(phone) || phone.length < 10) {
      alert("Por favor, ingresa un número de teléfono válido.");
      return;
    }

    // Crear la URL de WhatsApp con el número
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${phone}&type=phone_number&app_absent=0`;

    // Redirigir al usuario a la URL
    window.open(whatsappUrl, "_blank");
  });
});
