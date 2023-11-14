export const GetComicDetails = async () => {
  try {
    const response = await fetch(
      `http://gateway.marvel.com/v1/public/comics/70718?&ts=1&apikey=bb79599b28a42de19a2ef130b35a767d&hash=0162bb5a8faf07b35b9c44f2bfff2096`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
  return null;
};
