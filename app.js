const form = document.querySelector('#searchForm');
const resultImagesDiv = document.querySelector('#resultImages');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.show.value;
    const config = { params: {q: searchTerm} }
    const res = await axios.get('https://api.tvmaze.com/search/shows', config)
    makeImages(res.data);
    form.elements.show.value = '';
})

const makeImages = (shows) => {
    clear();
    for (let result of shows) {
        if(result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            resultImagesDiv.append(img);
        }
    }
}

const clear = () => {
    const images = document.querySelectorAll('img')
    images.forEach(img => img.remove())
}
