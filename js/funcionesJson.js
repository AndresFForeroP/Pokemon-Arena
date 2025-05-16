//funciones del json 
const URL_API = "http://localhost:3000/"
const MYHEADERS = new Headers({
    "Content-Type": "application/json"
});
const GetJson = async(categoria) => {
    try {
        const respuesta = await fetch(`${URL_API}${categoria}`)
        if (respuesta.status == 200) {
            const datos = await respuesta.json();
            return datos
        }else if (respuesta.status == 401) {
            console.log("La url no es correcta");
        }else if (respuesta.status == 404) {
            console.log(`${categoria} no existe`);
        }else {
            console.log("Se presento un error en la peticion")
        }
    }catch(error){
        console.log(error);
    }
}
const PostJson = async(datos,categoria) => {
    try {
        return await fetch(`${URL_API}${categoria}`, {
            method: "POST",
            headers: MYHEADERS,
            body: JSON.stringify(datos)            
        });
    } catch (error) {
        console.error("Error en la solicitud post", error.message);
    }
}
const PatchJson = async(datos,categoria,id) => {
    try {
        return await fetch(`${URL_API}${categoria}/${id}`, {
            method: "PATCH",
            headers: MYHEADERS,
            body: JSON.stringify(datos)            
        });
    } catch (error) {
        console.error("Error en la solicitud PATCH", error.message);
    }
}
const DeleteJson = async(categoria,id) => {
    try {
        return await fetch(`${URL_API}${categoria}/${id}`, {
            method: "DELETE",
            headers: MYHEADERS,           
        });
    } catch (error) {
        console.error("Error en la solicitud DELETE", error.message);
    }
}
export{
    GetJson,
    PostJson,
    PatchJson,
    DeleteJson
}