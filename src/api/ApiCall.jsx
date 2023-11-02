export const ApiCall = async () => {
  try {
    const respuesta = await fetch(
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=bb79599b28a42de19a2ef130b35a767d&hash=0162bb5a8faf07b35b9c44f2bfff2096"
    );
    console.log(respuesta);
    const datos = await respuesta.json();
    console.log(datos);
  } catch (error) {
    console.log(error);
  }
};
