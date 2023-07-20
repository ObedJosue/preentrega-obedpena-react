
// const misProductos = [
//     {id:"1", nombre: "Teclados", precio:250, stock:10, img:"/imagen/teclado.jpg", idCat:"1"},
//     {id:"2", nombre: "Auriculares", precio:300, stock:10, img:"/imagen/Auriculares.png", idCat:"2"},
//     {id:"3", nombre: "Monitores", precio:1000, stock:20, img:"/imagen/monitor.jpg", idCat:"3"},
//     {id:"4", nombre: "Mouses", precio:100, stock:10, img:"/imagen/mouse.jpg", idCat:"4"},
//     {id:"5", nombre: "Desktops", precio:600, stock:10, img:"/imagen/desktops.png", idCat:"5"},
// ];

// export const getProductos = () => {
//     return new Promise ( (resolve) => {
//         setTimeout(() => {
//             resolve(misProductos);
//         }, )
//     })
// }

// export const getUnProducto = (id) => {
//     return new Promise ( resolve => {
//         setTimeout( () => {
//             const producto = misProductos.find(prod => prod.id === id);
//             resolve(producto); 
//         }, )
//     })
// }

// export const getProductosPorCategoria = (idCategoria) => {
//     return new Promise ( resolve => {
//         setTimeout( () => {
//             const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
//             resolve (productosCategoria);
//         }, )
//     } )
// }

