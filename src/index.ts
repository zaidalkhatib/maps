import {User} from "./User"; 
import {Company} from "./Company"
import {Maps} from './Maps'

const maps = new Maps('map'); 
const user = new User();
const company = new Company(); 

maps.initMap();

maps.addMarker(user);
maps.addMarker(company);
