console.log("clicked cat");
const loadCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    categorys =data.data;
    displayCategory(categorys);
}
const displayCategory = categorys => {
    const categoryContainer = document.getElementById('category-container');
    categorys.forEach(category => {
        console.log(category);
        const categoryCard = document.createElement('div');
        categoryCard.classList = 'gap-2 bg-white shadow-none';
        categoryCard.innerHTML = `
        <button class="btn bg-gray-300 text-black border-none rounded-md
        w-24">
        ${category.category}</button>
        `;
        categoryContainer.appendChild(categoryCard);
    });
}
loadCategory();