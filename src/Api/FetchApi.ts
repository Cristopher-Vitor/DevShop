const fetchProducts = async ()=>{
    const response = await fetch("https://api.mercadolibre.com/sites/MLB/search?q=iphone");
    const data = await response.json();
    return data.results;
}
export default fetchProducts;