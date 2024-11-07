export async function getRecetas() {
    const Recetas = 'https://api.spoonacular.com/recipes/716429/information?apiKey=5a47319157a1482cbb4883ed489859a2';

    const rawData = await fetch(Recetas);
    const json = await rawData.json();

    const {
        data: { items },
    } = json;

    return items.map((item) =>{
        const {
            name, image, popular, cheap, vegetarian, vegan, glutenFree
        } = item;

        const {bucketType, bucketPath} = image;
        const img = '' 
    });
}