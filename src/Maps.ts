interface Item
{
  location: 
  {
    lat:number, 
    lng:number
  }
  name:string
  contnet():string

}
export class Maps
{


  id:string;
  name:string; 
  constructor(id:string)
  {
  this.id=id;
  }
  private map: google.maps.Map;
  initMap(): void {
    this.map = new google.maps.Map(document.getElementById(this.id),  {
      zoom: 5,
      center: { lat: 25.344, lng: 25.344 },
    }); 
  }
  
 
  addMarker(item:Item):void
  {
  
    const infowindow = new google.maps.InfoWindow({
      content: item.contnet()
    });
    const uluru = { lat:item.location.lat,lng:item.location.lng};
    const marker = new google.maps.Marker({
      position:uluru,
      map: this.map,
      title:item.name
    });
    marker.addListener("click", () => {
      infowindow.open(this.map, marker);
    });
  }
  

}
