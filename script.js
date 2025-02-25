////////////////////
// URL PARAMETERS //
////////////////////

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const dateFormat = urlParams.get("dateFormat") || 'MMMM DD dddd yyyy hh:mm:ss A';

///////////////
// FUNCTIONS //
///////////////

function setTime()
{
    document.getElementById("timeLabel").innerHTML = moment().format(dateFormat);
    setTimeout(setTime, 1000);
}

setTime();