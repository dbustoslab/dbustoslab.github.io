function initMap() {
    var latLong = [-32.883277, -68.875394]; // Mendoza

    var map = L.map("map").setView(latLong, 4);

    L.tileLayer("https://b.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '',
      maxZoom: 18,
    }).addTo(map);

    var icon = L.icon({
      iconUrl: "images/map-marker.png",
      iconSize:     [25, 41],
      //iconUrl: "images/map-loc.png",
      //iconSize:     [57, 66],
    });
    var marker = L.marker(latLong, { icon: icon }).addTo(map);
}
document.addEventListener("DOMContentLoaded", initMap);
