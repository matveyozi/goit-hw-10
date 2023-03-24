import { Notify } from 'notiflix';
import { resetRender } from "./renderData";

function onFetchError() {
	resetRender();
	return Notify.failure('Oops, there is no country with that name');
}

function foundManyCountry() {
	return Notify.info(
		'Too many matches found. Please enter a more specific name.'
	);
}

export {onFetchError, foundManyCountry}