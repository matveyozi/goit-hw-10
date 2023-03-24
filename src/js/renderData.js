const refs = {
	searchBox: document.querySelector('#search-box'),
	countryList: document.querySelector('.country-list'),
	countryInfo: document.querySelector('.country-info'),
};


export function resetRender() {
	refs.countryList.innerHTML = '';
	refs.countryInfo.innerHTML = '';
}

export function renderCountryList(countries) {
	const markup = countries
		.map(country => {
			return `<li class="country-list__item">
  <img class="country-list__flag" src="${country.flags.svg}" alt="${country.alt}" width=30em>
  <p class="country-list__text">${country.name.official}</p>
  </li>`;
		})
		.join('');

	return (refs.countryList.innerHTML = markup);
}

export function renderCountryInfo(country) {
	const name = country[0].name.official;
	const capital = country[0].capital;
	const population = country[0].population;
	const flag = country[0].flags.svg;
	const alt = country[0].flags.alt;
	const languages = Object.values(country[0].languages).join(', ');

	const markup = `<div class="wrap">
  <img class="country-info__flag" src="${flag}" alt="${alt}" width=30em>
  <h2 class="country-info__title">${name}</h2>
  </div>
  <p class="country-info__text"><span>Capital:</span> ${capital}</p>
  <p class="country-info__text"><span>Population:</span> ${population}</p>
  <p class="country-info__text"><span>Languages:</span> ${languages}</p>`;

	refs.countryInfo.innerHTML = markup;
}