import './css/styles.css';
import './js/fetchCountries';

import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries.js';
import { onFetchError, foundManyCountry } from './js/notifyMassege.js'
import { resetRender, renderCountryList, renderCountryInfo } from './js/renderData.js'
const refs = {
	searchBox: document.querySelector('#search-box'),
	countryList: document.querySelector('.country-list'),
	countryInfo: document.querySelector('.country-info'),
};
const DEBOUNCE_DELAY = 500;
let countryName = '';

refs.searchBox.addEventListener(
	'input',
	debounce(onSearchCountry, DEBOUNCE_DELAY)
);

function onSearchCountry(e) {
	countryName = e.target.value;

	resetRender();

	if (!countryName == '') {
		return fetchCountries(countryName).then(isCountryFound).catch(onFetchError);
	}
}

function isCountryFound(response) {
	let numberCountries = response.length;
	if (numberCountries > 10) {
		resetRender();
		return foundManyCountry();
	} else if (numberCountries === 1) {
		resetRender();
		return renderCountryInfo(response);
	} else if (numberCountries > 1) {
		resetRender();
		return renderCountryList(response);
	}
}








