const api = "https://my-json-server.typicode.com/benirvingplt/products";

export async function getProducts() {
  const apiUrl = `${api}/products`;
  try {
    const result = await fetch(apiUrl);
    const json = await result.json();
    return json;
  } catch (err) {
    return err;
  }
}

export async function getNavigation() {
  const apiUrl = `${api}/nav`;
  try {
    const result = await fetch(apiUrl);
    const json = await result.json();
    return json;
  } catch (err) {
    return err;
  }
}
