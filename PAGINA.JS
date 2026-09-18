let hora = new Date().getHours();

if (hora < 12) {
    mensaje = "¡Buenos días! Bienvenido a mi página web.";
}
else if (hora < 19) {
    mensaje = "¡Buenas tardes! Bienvenido a mi página web.";
}
else {
    mensaje = "¡Buenas noches! Bienvenido a mi página web.";
}

alert(mensaje);