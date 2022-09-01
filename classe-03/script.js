const musicalSelection = document.querySelector('#musical-genre');
const inputSearch = document.querySelector('input');
const form = document.querySelector('form');

const searchMusic = (event) => {
    inputSearch.value = event.target.value;
};

musicalSelection.addEventListener('change', searchMusic);

const checkMusicValue = (event) => {
    if (!inputSearch.value) {
        event.preventDefault();
    }
};

form.addEventListener('submit', checkMusicValue);