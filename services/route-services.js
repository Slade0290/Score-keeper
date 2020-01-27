import axios from 'axios';

const key = 'AIzaSyAuh-GDGYJoWy78eDrxAFdyUvV7l5dpQB4';
const url = `https://maps.googleapis.com/maps/api/directions/json?origin=12rueanatolefrance&destination=Universal+Studios+Hollywood&key=${key}`;

class RouteService {
    getRoute() {
        return axios.get(`${url}`);        
    }
}

export default RouteService;