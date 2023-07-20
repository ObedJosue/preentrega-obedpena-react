Gaming Shop - Tienda de productos de gaming
Gaming Shop es una tienda de productos de gaming en línea que te permite comprar teclados, auriculares, monitores, mouses y desktops para mejorar tu experiencia de juego.

Tecnologías utilizadas
React
React Router Dom
Firebase Firestore (base de datos)
Firebase Authentication (autenticación de usuarios)
Instalación
Clona el repositorio desde GitHub:
bash
Copy code
git clone <URL_DEL_REPOSITORIO>
Navega hasta el directorio del proyecto:
bash
Copy code
cd gaming-shop
Instala las dependencias:
Copy code
npm install
Crea un archivo .env en la raíz del proyecto y completa las siguientes variables con la información de tu proyecto Firebase:
makefile
Copy code
REACT_APP_API_KEY=YOUR_FIREBASE_API_KEY
REACT_APP_AUTH_DOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
REACT_APP_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
REACT_APP_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
REACT_APP_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
REACT_APP_APP_ID=YOUR_FIREBASE_APP_ID
Uso
Una vez que hayas realizado la instalación, puedes iniciar la aplicación localmente usando:

sql
Copy code
npm start
Esto iniciará la aplicación en modo de desarrollo.

Estructura del proyecto
src/components: Contiene los componentes de la aplicación, como el NavBar, CartWidget, ItemListContainer, ItemDetailContainer, etc.
src/context: Aquí se encuentra el contexto del carrito, que permite compartir la información del carrito entre diferentes componentes.
src/Services: Contiene la configuración y la inicialización de Firebase Firestore.
Rutas
/: Muestra todos los productos disponibles en la tienda.
/categoria/:idCategoria: Filtra y muestra los productos por categoría (1: Teclados, 2: Auriculares, 3: Monitores, 4: Mouses, 5: Desktops).
/item/:idItem: Muestra los detalles de un producto específico.
/cart: Muestra el carrito de compras con los productos agregados.
/checkout: Permite finalizar la compra y completar los detalles del usuario para el envío.
Contribuir
Si deseas contribuir al proyecto, ¡estamos abiertos a recibir tus pull requests!

Licencia
Este proyecto se encuentra bajo la Licencia MIT. Puedes consultar el archivo LICENSE para más detalles.

Consideraciones Finales
Este proyecto es una tienda de productos para gamers desarrollada con React y Firebase. Puede extenderse y mejorarse para agregar más funcionalidades, como autenticación de usuarios, búsqueda de productos, funcionalidades de pago, etc.

Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarnos a través de nuestra página de contacto.

¡Gracias por usar Gaming Shop! Esperamos que disfrutes tu experiencia de compra. ¡Diviértete jugando! 🎮