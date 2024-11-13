function contatoWhatsApp() {
    const phoneNumber = '5575982478340'; // Substitua com o número correto
    const message = "Olá, gostaria de mais informações sobre a locação de andaimes escoras e bitoneiras!";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}
