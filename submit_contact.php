<?php
// Verifica si el formulario fue enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura los datos del formulario
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Verifica si todos los campos están completos
    if (!empty($name) && !empty($email) && !empty($message)) {
        // Define el destinatario del correo (tu dirección)
        $to = "sanimarinnovation@gmail.com"; 
        $subject = "Nuevo mensaje de contacto - SANIMAR";

        // Construye el cuerpo del mensaje
        $email_content = "Nombre: $name\n";
        $email_content .= "Correo: $email\n\n";
        $email_content .= "Mensaje:\n$message\n";

        // Encabezados del correo
        $headers = "From: $name <$email>";

        // Envía el correo
        if (mail($to, $subject, $email_content, $headers)) {
            // Si el correo se envía correctamente, muestra un mensaje de éxito
            echo "Gracias por tu mensaje, $name. Nos pondremos en contacto contigo pronto.";
        } else {
            // Si hay un error al enviar el correo
            echo "Lo siento, ocurrió un error al enviar tu mensaje. Por favor, intenta nuevamente.";
        }
    } else {
        // Si faltan campos, muestra un error
        echo "Por favor completa todos los campos del formulario.";
    }
} else {
    // Si se intenta acceder al archivo directamente sin enviar el formulario
    echo "Acceso denegado.";
}
?>
