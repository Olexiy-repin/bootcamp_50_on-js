import heroesDb from '../json/heroes.json';
import createHeroCard from '../templates/heroes.hbs';

/*
<li class="heroes__item">
    <img src="${url}" alt="${name}" class="heroes__picture">
    <div class="heroes__content">
        <h2 class="heroes__name">${name}</h2>
        <ul class="heroes__biography list">
            <li class="heroes__biography-item"><p class="heroes__gender"><strong>Gender: </strong> ${gender}</p></li>
            <li class="heroes__biography-item"><p class="heroes__alter-egos"><strong>Alter Egos: </strong> ${alterEgos}</p></li>
        </ul>
    </div>
</li>
*/

const heroesListEl = document.querySelector('.js-heroes-list');

const heroesCards = createHeroCard(heroesDb);

heroesListEl.innerHTML = heroesCards;
