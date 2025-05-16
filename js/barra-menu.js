    //definicion de constantes de estilo de la barra del menu
const home = `.barra-menu{
    box-shadow: 0px 6px 3px var(--azul);
    a{
        text-decoration: none;
    }
    display: grid;
    grid-template-columns: 15% 21% 21% 21% 21%;
    background-color: var(--rojo);
    width: 101%;
    height: 6rem;
    margin-top: -0.5rem;
    margin-left: -0.5rem;
    img{
        margin-top: 0.3rem;
        width: 4.5rem;
        margin-left: 2.3rem;
    }
    div{
        margin: 0.5rem;
        margin-left: 1rem;
    }
    .primera-menu{
        margin-left: -1rem;
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .primera-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .home-menu{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .septima-menu{
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .septima-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .batalla-menu{
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .batalla-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
}
@media(max-width:768px) {
    .barra-menu{
        font-size:10px;
        display:grid;
        grid-template-columns: repeat(5,20%);
        overflow-x: scroll;
        height:80px;
        width:102%;
        div{
            margin:auto;
        }
        .icono-menu{
            width:100px;
            img{
                width:55px;
            }
        }
        .home-menu{
            font-size:25px;
            margin-left:60px;
            margin-top:30px;
        }
        .primera-menu{
            margin-left:120px;
        }
        .septima-menu{
            margin-left:140px;
        }
        .batalla-menu{
            margin-left:160px;
            padding-right: 30px;
        }

    }

}

@media(max-width:1180px) and (min-width:768px){

    .barra-menu{
        font-size:10px;
        display:grid;
        grid-template-columns: repeat(5,20%);
        overflow-x: scroll;
        height:130px;
        width:102%;
        div{
            margin:auto;
        }
        .icono-menu{
            width:80px;
            img{
                width:80px;
            }
        }
        .home-menu{
            font-size:35px;
            margin-left:60px;
            margin-top:30px;
        }
        .primera-menu{
            margin-left:120px;
        }
        .septima-menu{
            margin-left:140px;
        }
        .batalla-menu{
            margin-left:140px;
            padding-right: 60px;
        }

    }
}`
const primera = `
.barra-menu{
    box-shadow: 0px 6px 3px var(--azul);
    a{
        text-decoration: none;
    }
    display: grid;
    grid-template-columns: 15% 21% 21% 21% 21%;
    background-color: var(--rojo);
    width: 100.4%;
    height: 6rem;
    margin-top: -0.5rem;
    margin-left: -0.5rem;
    img{
        margin-top: 0.3rem;
        width: 4.5rem;
        margin-left: 2.3rem;
    }
    div{
        margin: 0.5rem;
        margin-left: 1rem;
    }
    .primera-menu{
        margin-left: -40px;
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .home-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .home-menu{
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .septima-menu{
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .septima-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .batalla-menu{
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .batalla-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
}
@media(max-width:768px) {
    .barra-menu{
        font-size:10px;
        display:grid;
        grid-template-columns: repeat(5,20%);
        overflow-x: scroll;
        height:80px;
        width:102%;
        div{
            margin:auto;
        }
        .icono-menu{
            width:100px;
            img{
                width:55px;
            }
        }
        .home-menu{
            margin-left:40px;
        }
        #btn-primera{
            width: 20px;
        }
        .primera-menu{
            font-size:20px;
            margin-left:90px;
            margin-top:30px;
        }
        .septima-menu{
            margin-left:140px;
        }
        .batalla-menu{
            margin-left:160px;
            padding-right: 30px;
        }

    }

}

@media(max-width:1390px) and (min-width:768px){
    .barra-menu{
        font-size:10px;
        display:grid;
        grid-template-columns: repeat(5,20%);
        overflow-x: scroll;
        height:130px;
        width:102%;
        div{
            margin:auto;
        }
        .icono-menu{
            width:80px;
            img{
                width:80px;
            }
        }
        .home-menu{
            margin-left:60px;
        }
        .primera-menu{
            font-size:25px;
            margin-left:85px;
            margin-top:30px;
        }
        .septima-menu{
            margin-left:140px;
        }
        .batalla-menu{
            margin-left:140px;
            padding-right: 60px;
        }

    }
}`
const septima = `.barra-menu{
    box-shadow: 0px 6px 3px var(--azul);
    a{
        text-decoration: none;
    }
    display: grid;
    grid-template-columns: 15% 21% 21% 21% 21%;
    background-color: var(--rojo);
    width: 101%;
    height: 6rem;
    margin-top: -0.5rem;
    margin-left: -0.5rem;
    img{
        margin-top: 0.3rem;
        width: 4.5rem;
        margin-left: 2.3rem;
    }
    div{
        margin: 0.5rem;
        margin-left: 1rem;
    }
    .primera-menu{
        margin-left: -2rem;
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .primera-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .home-menu{
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .septima-menu{
        margin-left:-0.9rem;
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .home-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .batalla-menu{
        margin-left:2rem;
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .batalla-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
}
@media(max-width:768px) {
    .barra-menu{
        font-size:10px;
        display:grid;
        grid-template-columns: repeat(5,20%);
        overflow-x: scroll;
        height:80px;
        width:102%;
        div{
            margin:auto;
        }
        .icono-menu{
            width:100px;
            img{
                width:55px;
            }
        }
        .home-menu{
            margin-left:60px;
        }
        .primera-menu{
            margin-left:120px;
        }
        .septima-menu{
            font-size:23px;
            margin-left:170px;
            margin-top:30px;
        }
        .batalla-menu{
            margin-left:220px;
            padding-right: 30px;
        }

    }

}

@media(max-width:1390px) and (min-width:768px){
    .barra-menu{
        font-size:10px;
        display:grid;
        grid-template-columns: repeat(5,20%);
        overflow-x: scroll;
        height:130px;
        width:102%;
        div{
            margin:auto;
        }
        .icono-menu{
            width:80px;
            img{
                width:80px;
            }
        }
        .home-menu{
            margin-left:60px;
        }
        .primera-menu{
            margin-left:120px;
        }
        .septima-menu{
            font-size:25px;
            margin-left:110px;
            margin-top:30px;
        }
        .batalla-menu{
            margin-left:140px;
            padding-right: 60px;
        }

    }
}`
const batalla = `.barra-menu{
    box-shadow: 0px 6px 3px var(--azul);
    a{
        text-decoration: none;
    }
    display: grid;
    grid-template-columns: 15% 21% 21% 21% 21%;
    background-color: var(--rojo);
    width: 101%;
    height: 6rem;
    margin-top: -0.5rem;
    margin-left: -0.5rem;
    img{
        margin-top: 0.3rem;
        width: 4.5rem;
        margin-left: 2.3rem;
    }
    div{
        margin: 0.5rem;
        margin-left: 1rem;
    }
    .primera-menu{
        margin-left: -1rem;
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .primera-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .home-menu{
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .septima-menu{
        margin-top: 1.7rem;
        color: var(--gris);
    }
    .septima-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
    }
    .batalla-menu{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);;
    }
    .home-menu:hover{
        margin-top: 1.5rem;
        font-size: 2.4rem;
        color: var(--amarrillo);
        text-shadow:
        -3px -3px 0 var(--azul),
        3px -3px 0 var(--azul),
        2px  7px 0 rgb(0, 0, 0,0.4),
        3px  3px 0 var(--azul);
        
    }
}
@media(max-width:768px) {
    .barra-menu{
        font-size:10px;
        display:grid;
        grid-template-columns: repeat(5,20%);
        overflow-x: scroll;
        height:80px;
        width:102%;
        div{
            margin:auto;
        }
        .icono-menu{
            width:100px;
            img{
                width:55px;
            }
        }
        .home-menu{
            margin-left:60px;
        }
        .primera-menu{
            margin-left:120px;
        }
        .septima-menu{
            margin-left:140px;
        }
        .batalla-menu{
            font-size:25px;
            margin-left:160px;
            margin-top:30px;
            padding-right: 30px;
        }

    }

}

@media(max-width:1180px) and (min-width:768px){
    .barra-menu{
        font-size:10px;
        display:grid;
        grid-template-columns: repeat(5,20%);
        overflow-x: scroll;
        height:130px;
        width:102%;
        div{
            margin:auto;
        }
        .icono-menu{
            width:80px;
            img{
                width:80px;
            }
        }
        .home-menu{
            margin-left:60px;
        }
        .primera-menu{
            margin-left:100px;
        }
        .septima-menu{
            margin-left:140px;
        }
        .batalla-menu{
            font-size:25px;
            margin-left:140px;
            margin-top:30px;
            padding-right: 60px;
        }
    }
}`
const definirgeneracion = (pagina) =>{
    localStorage.setItem("generacion",pagina)
    window.location.href = "./pag2.html";
}
export class barraBusqueda extends HTMLElement{
    constructor() {
        super();
        this.attachShadow({mode:'open'})
        this._categoria = "";
        this.pagina = document.createElement('div')
        this.pagina.classList.add('barra-menu');
        this.pagina.innerHTML = `
        <div class="icono-menu">
            <img src="./storage/img/logo-barra.png" alt="">
        </div>
        <div >
            <a href="./index.html"><h1 class="home-menu">HOME</h1></a>
        </div>
        <div >
            <a id= "btn-primera" ><h1 class="primera-menu">1ra GEN</h1></a>
        </div>
        <div>
            <a id= "btn-septima"><h1 class="septima-menu">7ra GEN</h1></a>
        </div>
        <div>
            <a href="./pag3.html"><h1 class="batalla-menu">BATTLE</h1></a>
        </div>
        `
        this.shadowRoot.appendChild(this.pagina);
        
    }
    set categoria(value){
        this._categoria = value;
        this.render();
    }
    render(){
        this.estilos = document.createElement('style')
        this.shadowRoot.innerHTML = "";
        this.shadowRoot.appendChild(this.pagina.cloneNode(true));
        this.shadowRoot.querySelector('#btn-primera').addEventListener('click',() =>{
            definirgeneracion("primera");
        })
        this.shadowRoot.querySelector('#btn-septima').addEventListener('click',() =>{
            definirgeneracion("septima");
        })
        switch (this._categoria) {
            case "home":
                this.estilos.innerHTML = `${home}`
                this.shadowRoot.appendChild(this.estilos);
                break;
            case "primera":
                this.estilos.innerHTML = `${primera}`
                this.shadowRoot.appendChild(this.estilos);
                break;
            case "septima":
                this.estilos.innerHTML = `${septima}`
                this.shadowRoot.appendChild(this.estilos);
                break;
            case "batalla":
                this.estilos.innerHTML = `${batalla}`
                this.shadowRoot.appendChild(this.estilos);
                break;
        }
    }
}