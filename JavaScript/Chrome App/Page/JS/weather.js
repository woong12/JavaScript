function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.latitude;
    console.log("You live it", lat, lng);
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
