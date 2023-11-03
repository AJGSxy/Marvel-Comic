export const ApiCall = async () => {
  try {
    const response = await fetch(
      "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=bb79599b28a42de19a2ef130b35a767d&hash=0162bb5a8faf07b35b9c44f2bfff2096"
    );
    console.log(response);
    const data = await response.json();
    console.log(data);
    // return data;
  } catch (error) {
    console.log(error);
  }
  return null;
};
