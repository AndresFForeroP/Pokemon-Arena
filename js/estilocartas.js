//estilos de las cartas individuales para que cada pokemon tenga su color distintivo  y el mismo diseño de carta  
export const estilocarta = `
.card-Pikachu{
    position: relative;
    width: 320px;
    height: 450px;
    background: linear-gradient(160deg, #f8e646 40%, #ffe819 100%);
    border-radius: 15px;
    box-shadow: 12px 12px 6px rgba(32, 32, 32, 0.2);
    overflow: hidden;
    padding: 10px;
    border: solid 1px rgb(207, 182, 42);
}
.card-Snorlax{
    position: relative;
    width: 300px;
    height: 450px;
    background: linear-gradient(160deg, #f3e45e 0%, #e9db62 100%);
    border-radius: 15px;
    box-shadow: 40px 50px 6px rgba(32, 32, 32, 0.2);
    overflow: hidden;
    padding: 11px;
    border: solid 1px rgb(173, 165, 165);
    transform: matrix3d(0.7, -0.5, 0.5, 0.4, 0.5, 0.7);
}
.card-Charizard {
    position: relative;
    width: 320px;
    height: 450px;
    background: linear-gradient(160deg, #dacb4a 10%, #ffed49 60%);
    border-radius: 15px;
    box-shadow: 40px 50px 6px rgba(32, 32, 32, 0.2);
    overflow: hidden;
    padding: 10px;
    border: solid 1px rgb(207, 182, 42); 
}
.card-Magikarp{
    position: relative;
    width: 320px;
    height: 450px;
    background: linear-gradient(160deg, #fff27c 10%, #ffed49 60%);
    border-radius: 15px;
    box-shadow: 40px 50px 6px rgba(32, 32, 32, 0.2);
    overflow: hidden;
    padding: 10px;
    border: solid 1px rgb(125, 182, 204);
}
.card-Rowlet{
    position: relative;
    width: 320px;
    height: 450px;
    background: linear-gradient(160deg, #f3e45e 40%, #bdb03e 100%);
    border-radius: 15px;
    box-shadow: 40px 50px 6px rgba(32, 32, 32, 0.2);
    overflow: hidden;
    padding: 10px;
    border: solid 1px rgb(173, 165, 165);
}
.card-Incineroar{
    position: relative;
    width: 320px;
    height: 450px;
    background: linear-gradient(160deg, #dacb4a 10%, #ffed49 60%);
    border-radius: 15px;
    box-shadow: 40px 50px 6px rgba(32, 32, 32, 0.2);
    overflow: hidden;
    padding: 10px;
    border: solid 1px rgb(207, 182, 42); 
}
.card-Zeraora{
    position: relative;
    width: 320px;
    height: 450px;
    background: linear-gradient(160deg, #f8e646 40%, #ffe819 100%);
    border-radius: 15px;
    box-shadow: 12px 12px 6px rgba(32, 32, 32, 0.2);
    overflow: hidden;
    padding: 10px;
    border: solid 1px rgb(207, 182, 42);
}
.card-Primarina{
    position: relative;
    width: 320px;
    height: 450px;
    background: linear-gradient(160deg, #fff27c 10%, #ffed49 60%);
    border-radius: 15px;
    box-shadow: 40px 50px 6px rgba(32, 32, 32, 0.2);
    overflow: hidden;
    padding: 10px;
    border: solid 1px rgb(125, 182, 204);
}
.fond-card-Pikachu{
    background-color: #75da86;
    background: linear-gradient(5deg, #f1b23b 16%, #ffcc33 80% );
    border: 1px solid rgb(218, 199, 33);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    padding: 15px;
}
.fond-card-Snorlax{
    background-color: rgb(236, 231, 231);
    border: 1px solid rgb(146, 139, 139);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    padding: 10px;
}
.fond-card-Charizard{
    background-color: #ffffff;
    background: linear-gradient(360deg, #e26140 40% ,#e46735 200%, #f04c23 40% );
    height: px;
    border: 1px solid rgb(218, 199, 33);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    padding: 15px;  
}
.fond-card-Magikarp{
    background-color: #ffffff;
    background: linear-gradient(in oklab, #6dc1db .625rem ,#0398c5 35rem,    #bfd5db .625rem );
    height: px;
    border: 1px solid rgb(202, 216, 170);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    padding: 15px;  
}
.fond-card-Rowlet{
    background-color: #75da86;
    background: linear-gradient(420deg, #75da86 16%, #5b9b48 80%);
    height: px;
    border: 1px solid rgb(108, 143, 75);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    padding: 15px;
}
.fond-card-Incineroar{
    background-color: #ffffff;
    background: linear-gradient(360deg, #e26140 40% ,#e46735 200%, #f04c23 40% );
    height: px;
    border: 1px solid rgb(218, 199, 33);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    padding: 15px;  
}
.fond-card-Zeraora{
    background-color: #75da86;
    background: linear-gradient(5deg, #f1b23b 16%, #ffcc33 80% );
    border: 1px solid rgb(218, 199, 33);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    padding: 15px;
}
.fond-card-Primarina{
    background-color: #ffffff;
    background: linear-gradient(in oklab, #6dc1db .625rem ,#0398c5 35rem,    #bfd5db .625rem );
    height: px;
    border: 1px solid rgb(202, 216, 170);
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    padding: 15px;  
}
.card-Pikachu::before {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 12px;
    background: linear-gradient(180deg, #fff6a0 10%, #ffe51e 100%);
}
.card-Snorlax::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 12px;
    background: linear-gradient(160deg, #fff6a0 0%, #ffed5e 100%);
    z-index: -1;
}
.card-Charizard::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 12px;
    background: linear-gradient(180deg, #fff6a0 10%, #ebe3ad 90%);
    z-index: -1;
}
.card-Magikarp::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 12px;
    background: linear-gradient(180deg, #fff6a0 10%, #ebe3ad 90%);
    z-index: -1;
}
.card-Rowlet::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 12px;
    background: linear-gradient(180deg, #fff6a0 10%, #bbac3e 100%);
    z-index: -1;
}
.card-Incineroar::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 12px;
    background: linear-gradient(180deg, #fff6a0 10%, #ebe3ad 90%);
    z-index: -1;
}
.card-Zeraora::before {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 12px;
    background: linear-gradient(180deg, #fff6a0 10%, #ffe51e 100%);
}
.card-Primarina::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 12px;
    background: linear-gradient(180deg, #fff6a0 10%, #ebe3ad 90%);
    z-index: -1;
}
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}
.card-type {
    display: flex;
    align-items: center;
    background: linear-gradient(155deg, #ffffff 10%, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 15px;
    padding: 2px 8px;
    margin-left: -8px;
    margin-top: -10px;
    font-size: 12px;
    font-weight: bold;
    border: 1px solid#857979b2;
    box-shadow: 1px 6px 4px rgba(32, 32, 32, 0.2);;
    overflow: hidden;
}   
    

.card-type::before {
    content: 'BÁSICO';
    font-size: 9px;
    font-weight: bold;
    color: #474646a9;
}   

.card-name {
    font-size: 22px;
    font-weight: bold;
    margin-top: -5px;
    margin-left: -50px;
    box-shadow: 10px 8px 3px rgba(160, 158, 158, 0.2);
    width: 10vh;
    text-align: center;
}  

.card-hp {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;
}
.card-hp::before {
    content: 'PS ';
    font-size: 8px;
    margin-top: 7px;
    font-weight: 900;
}   

.energy-icon {
    width: 25px;
    height: 25px;
    background: linear-gradient(155deg, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 50%;
    margin-left: 5px;
    margin-top:-5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid#686060;
    box-shadow: 1px 6px 4px rgba(32, 32, 32, 0.2);;
}
.energy-icon::after {
    content: '★';
    font-size: 20px;
}
.energy-icon-apl {
    width: 15px;
    height: 15px;
    background: linear-gradient(155deg, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 50%;
    margin-left: 5px;
    margin-top:-5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid#686060;
    box-shadow: 1px 6px 4px rgba(32, 32, 32, 0.2);;
}
.energy-icon-apl::after {
    content: '★';
    font-size: 12px;
}
.energy-icon-apl-al {
    width: 12px;
    height: 12px;
    background: linear-gradient(155deg, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 50%;
    margin-left: 5px;
    margin-top:-1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid#686060;
    box-shadow: 1px 6px 4px rgba(32, 32, 32, 0.2);;
}
.energy-icon-apl-al::after {
    content: '★';
    font-size: 9px;
}
.background-logo{
    width: 16px;
    height: 16px;
    border-radius: 50%;
    margin-left: 5px;
    margin-top:-4.5px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 6px 4px rgba(32, 32, 32, 0.2);
}
.logo-icon-planta-Pikachu{
    position: absolute;
    width: 17px;
    height: 17px;
    background-image: url('../storage/img/pokemons/pikachu/tipo.png');
    margin-left: 25px;
    margin-top:-6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
}
.logo-icon-planta-Snorlax{
    position: absolute;
    width: 17px;
    height: 17px;
    background-image: url('../storage/img/pokemons/snorlax/tipo.png');
    margin-left: 25px;
    margin-top:-6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
} 
.logo-icon-planta-Charizard{
    position: absolute;
    width: 17px;
    height: 17px;
    background-image: url('../storage/img/pokemons/charizard/tipo.png');
    margin-left: 25px;
    margin-top:-6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
}
.logo-icon-planta-Magikarp{
    position: absolute;
    width: 17px;
    height: 17px;
    background-image: url('../storage/img/pokemons/magikarp/tipo.png');
    margin-left: 25px;
    margin-top:-6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
}
.logo-icon-planta-Rowlet{
    position: absolute;
    width: 37px;
    height: 47px;
    background-image: url('../storage/img/pokemons/rowlet/tipo.png');
    margin-left: 20px;
    margin-top:-20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
}
.logo-icon-planta-Incineroar{
    position: absolute;
    width: 17px;
    height: 17px;
    background-image: url('../storage/img/pokemons/incineroar/tipo.png');
    margin-left: 25px;
    margin-top:-6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
}
.logo-icon-planta-Zeraora{
    position: absolute;
    width: 17px;
    height: 17px;
    background-image: url('../storage/img/pokemons/zeraora/tipo.png');
    margin-left: 25px;
    margin-top:-6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
}
.logo-icon-planta-Primarina{
    position: absolute;
    width: 17px;
    height: 17px;
    background-image: url('../storage/img/pokemons/primarina/tipo.png');
    margin-left: 25px;
    margin-top:-6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-position: center 50%;
    background-repeat: no-repeat;
}
.card-image-Pikachu{
    position: relative;
    height: 171px;
    background: linear-gradient(160deg, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 8px;
    border: 4.5px solid #928a8a;
    overflow: hidden;
    margin-bottom: -1px;
}
.card-image-Snorlax{
    position: relative;
    height: 171px;
    background: linear-gradient(to top, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 8px;
    border: 4.5px solid #928a8a;
    overflow: hidden;
    margin-bottom: -1px;
}
.card-image-Charizard{
    position: relative;
    height: 171px;
    background: linear-gradient(160deg, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 4px;
    border: 2px solid #836c4d;
    overflow: hidden;
    margin-bottom: -1px;
}
.card-image-Magikarp{
    position: relative;
    height: 171px;
    background: linear-gradient(160deg, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 4px;
    border: 2px solid #836c4d;
    overflow: hidden;
    margin-bottom: -1px;
}
.card-image-Rowlet{
    position: relative;
    height: 171px;
    background: linear-gradient(160deg, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 8px;
    border: 4.5px solid #928a8a;
    overflow: hidden;
    margin-bottom: -1px;
}
.card-image-Incineroar{
    position: relative;
    height: 171px;
    background: linear-gradient(160deg, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 4px;
    border: 2px solid #836c4d;
    overflow: hidden;
    margin-bottom: -1px;
}
.card-image-Zeraora{
    position: relative;
    height: 171px;
    background: linear-gradient(160deg, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 8px;
    border: 4.5px solid #928a8a;
    overflow: hidden;
    margin-bottom: -1px;
}
.card-image-Primarina{
    position: relative;
    height: 171px;
    background: linear-gradient(160deg, #ffffff, #949292, #ffffff,#9e9b9b, #ffffff );
    border-radius: 4px;
    border: 2px solid #836c4d;
    overflow: hidden;
    margin-bottom: -1px;
}
.pokemon-image-Pikachu{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../storage/img/pokemons/pikachu/pikachu.png);
    background-size: cover;
    background-position: center 48%;
    background-repeat: no-repeat;
}
.pokemon-image-Snorlax{
    position: absolute;
    width: 110%;
    height: 100%;
    background-image: url(../storage/img/pokemons/snorlax/snorlax.png);
    background-size: cover;
    background-position: center 30%;
    background-repeat: no-repeat;
}
.pokemon-image-Charizard{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../storage/img/pokemons/charizard/charizard.png);
    background-size: cover;
    background-position: center 48%;
    background-repeat: no-repeat;
}
.pokemon-image-Magikarp{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../storage/img/pokemons/magikarp/magikarp.jpg);
    background-size: cover;
    background-position: center 48%;
    background-repeat: no-repeat;
}
.pokemon-image-Rowlet{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../storage/img/pokemons/rowlet/rowlet.jpg);
    background-size: cover;
    background-position: center 48%;
    background-repeat: no-repeat;
}
.pokemon-image-Incineroar{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../storage/img/pokemons/incineroar/incineroar.jpg);
    background-size: cover;
    background-position: center 48%;
    background-repeat: no-repeat;
}
.pokemon-image-Zeraora{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../storage/img/pokemons/zeraora/zeraora.jpg);
    background-size: cover;
    background-position: center 48%;
    background-repeat: no-repeat;
}
.pokemon-image-Primarina{
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(../storage/img/pokemons/primarina/primarina.png);
    background-size: cover;
    background-position: center 48%;
    background-repeat: no-repeat;
}
.detail-card-info{
    background-color: rgb(121, 117, 117);
    background: center 50%;
    
}
.card-info {
    font-size: 9px;
    color: #000000;
    border-bottom: 1px solid #d3d3d3;
    background: linear-gradient(155deg,  #ffffff, #949292, #ffffff,#b1aeae, #ffffff );
    box-shadow: 8px 10px 6px rgba(59, 59, 59, 0.2);;
    border-radius: 20px ;
    padding-bottom: 1px;
    margin-bottom: 3px;
    text-align: center;
    border-radius: 30px;
    height: 15px;
    align-content: center;
    border: 1px solid rgb(182, 176, 176);
}   

.card-attacks {
    margin-top: 10px;
}
.attack {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.attack-cost {
    display: flex;
    margin-right: 10px;
} 

.attack-details {
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ddd;
    padding-bottom: 7px;
}
.attack-name {
    font-weight: bold;
    font-size: 15px;
    width: 20vh;
    margin-top: 5px;
    text-align: center;
}
.attack-name-1 {
    font-weight: bold;
    font-size: 15px;
    width: 28vh;
    text-align: center;
    margin-left: -15px;
}
.attack-damage {
    font-weight: bold;
    font-size: 20px;
}
.attack-description {
    font-size: 10px;
    color: #000000;
    margin-top: 2px;
    margin-left: 5px;
}
.weakness {
    display: flex;
    align-items: center;
    font-size: 19px;
    font-weight: 700;
}
.debilidad{
    margin-left: 70px;
}
.weakness-icon-Pikachu {
    width: 70px;
    height: 50px;
    background-image: url(../storage/img/pokemons/pikachu/debilidad.png);
    background-size: cover;
    border-radius: 60%;
    margin-top: -20px;
    margin-left: -2px;
    margin-right: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
}
.weakness-icon-Snorlax {
    width: 66px;
    height: 66px;
    background-image: url(../storage/img/pokemons/snorlax/debilidad.png);
    background-size: cover;
    border-radius: 60%;
    margin-left: 5px;
    margin-right: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
}
.weakness-icon-Charizard{
    width: 70px;
    height: 35px;
    background-image: url(../storage/img/pokemons/charizard/debilidad.png);
    background-size: cover;
    border-radius: 60%;
    margin-top: 0px;
    margin-left: -2px;
    margin-right: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
}
.weakness-icon-Magikarp{
    width: 30px;
    height: 30px;
    background-image: url(../storage/img/pokemons/magikarp/debilidad.png);
    background-size: cover;
    border-radius: 60%;
    margin-left: 10px;
    margin-right: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
}
.weakness-icon-Rowlet{
    width: 28px;
    height: 30px;
    background-image: url(../storage/img/pokemons/rowlet/debilidad.png);
    background-size: cover;
    border-radius: 60%;
    margin-top: 0px;
    margin-left: 20px;
    margin-right: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
}
.weakness-icon-Incineroar{
    width: 70px;
    height: 35px;
    background-image: url(../storage/img/pokemons/incineroar/debilidad.png);
    background-size: cover;
    border-radius: 60%;
    margin-top: 0px;
    margin-left: -2px;
    margin-right: 45px;
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
}
.weakness-icon-Zeraora {
    width: 70px;
    height: 50px;
    background-image: url(../storage/img/pokemons/zeraora/debilidad.png);
    background-size: cover;
    border-radius: 60%;
    margin-top: -20px;
    margin-left: -2px;
    margin-right: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
}
.weakness-icon-Primarina{
    width: 30px;
    height: 30px;
    background-image: url(../storage/img/pokemons/primarina/debilidad.png);
    background-size: cover;
    border-radius: 60%;
    margin-left: 10px;
    margin-right: 75px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
}
.retreat-cost {
    display: flex;
}
.retreat-cost energy-icon{
    width:10px;
    height: 25px;
}
.card-copyright {
    font-size: 7px;
    color: #222121;
    margin-top: 10px;
    text-align: center;
}
.card-number {
    display: flex;
    justify-content: space-between;
    font-size: 8px;
    color: #161515;
    margin-top: 5px;
}
.carta-volteada{
    text-align:center;
    transform: rotateY(180deg);
}
.debilidad-icon-Pikachu{
    margin-top: -50px;
    margin-left: 80px;
    width: 150px;
    height: 150px;
    background-image: url(../storage/img/pokemons/pikachu/debilidad.png);
    background-size: cover;
}
.debilidad-icon-Snorlax{
    margin-top: -30px;
    margin-left: 110px;
    width: 100px;
    height: 100px;
    background-image: url(../storage/img/pokemons/snorlax/debilidad.png);
    background-size: cover;
}
.debilidad-icon-Charizard{
    margin-top: -10px;
    margin-left: 100px;
    width: 100px;
    height: 60px;
    background-image: url(../storage/img/pokemons/charizard/debilidad.png);
    background-size: cover;
}
.debilidad-icon-Magikarp{
    margin-top: -10px;
    margin-left: 125px;
    width: 60px;
    height: 60px;
    background-image: url(../storage/img/pokemons/magikarp/debilidad.png);
    background-size: cover;
}
.debilidad-icon-Rowlet{
    margin-top: -10px;
    margin-left: 125px;
    width: 60px;
    height: 60px;
    background-image: url(../storage/img/pokemons/rowlet/debilidad.png);
    background-size: cover;
}
.debilidad-icon-Incineroar{
    margin-top: -10px;
    margin-left: 100px;
    width: 100px;
    height: 60px;
    background-image: url(../storage/img/pokemons/incineroar/debilidad.png);
    background-size: cover;
}
.debilidad-icon-Zeraora{
    margin-top: -50px;
    margin-left: 80px;
    width: 150px;
    height: 150px;
    background-image: url(../storage/img/pokemons/zeraora/debilidad.png);
    background-size: cover;
}
.debilidad-icon-Primarina{
    margin-top: -10px;
    margin-left: 125px;
    width: 60px;
    height: 60px;
    background-image: url(../storage/img/pokemons/primarina/debilidad.png);
    background-size: cover;
}`