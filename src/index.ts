import {User} from "./User"; 
import {Company} from "./Company"
import {Maps} from './Maps'

const maps = new Maps(); 
const user = new User();
const company = new Company(); 


maps.initMap();

maps.addMarker(25.344,25.344);
maps.addMarker(2.344,25.344);