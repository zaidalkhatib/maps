import faker from "faker"; 
export class User
{
  public name:string; 
  location:
  {
    lat:number;
    lng:number; 
  }
  contnet():string
  {
    return `<h1>This is ${this.name}<h1>`
  }
  constructor()
  {
    this.name=faker.name.findName();
    this.location=
    {
      lat:Number(faker.address.latitude()),
      lng:Number(faker.address.latitude()),
    }

  }
}