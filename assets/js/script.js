var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: -6.91836432,
      lng: 107.61358649
    },
    zoom: 8
  });
}