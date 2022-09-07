let articulos= [{
    img:"/img/1.jpg",
    iconStar:'<i class="fa-solid fa-cart-shopping"></i>',
    nombre: "hamburgesa-1",
    precio: "$100"
},{
    img:"/img/2.webp",
    iconStar:'<i class="fa-solid fa-cart-shopping"></i>',
    nombre: "hamburgesa-2",
    precio: "$200"
},{
    img:"/img/3.jpg",
    iconStar:'<i class="fa-solid fa-cart-shopping"></i>',
    nombre: "hamburgesa-3",
    precio: "$300"
},{
    img:"/img/4.jpg",
    iconStar:'<i class="fa-solid fa-cart-shopping"></i>',
    nombre: "hamburgesa-4",
    precio: "$400"
},{
    img:"/img/5.jfif",
    iconStar:'<i class="fa-solid fa-cart-shopping"></i>',
    nombre: "hamburgesa-5",
    precio: "$500"
},{
    img:"/img/6.webp",
    iconStar:'<i class="fa-solid fa-cart-shopping"></i>',
    nombre: "hamburgesa-5",
    precio: "$500"
},{
    img:"/img/7.jfif",
    iconStar:'<i class="fa-solid fa-cart-shopping"></i>',
    nombre: "hamburgesa-5",
    precio: "$500"
},{
    img:"/img/7.jfif",
    iconStar:'<i class="fa-solid fa-cart-shopping"></i>',
    nombre: "hamburgesa-5",
    precio: "$500"
},{
    img:"/img/7.jfif",
    iconStar:'<i class="fa-solid fa-cart-shopping"></i>',
    nombre: "hamburgesa-5",
    precio: "$500"
}]

for (let articulo in articulos){
    let datos = articulos[articulo];
    let img = datos["img"]
    let iconStar = datos["iconStar"]
    let nombre = datos["nombre"];
    let precio = datos["precio"]
    let htmlCode=`
    <article>
        <div class="container-img"><img class="img-prod" src="${img}"></div> 
        <div class="icon-star">${iconStar}</div>
        <div class="nombre-prod"><h3>${nombre}</h3></div>
        <div class="precio-prod"><h3>${precio}</h3></div>
    </article>`

    document.querySelector(".contenedor-producto").innerHTML += htmlCode
}

