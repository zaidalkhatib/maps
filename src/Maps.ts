let map: google.maps.Map;
export class Maps
{

  initMap(): void {
    map = new google.maps.Map(document.getElementById("map"),  {
      zoom: 8,
      center: { lat: 0, lng: 0 },
    }); 
  }
  addMarker(lat:number,  lng:number)
  {
    const uluru = { lat,lng };
    const marker = new google.maps.Marker({
      position:uluru,
      map: map,
    });
  }

}
