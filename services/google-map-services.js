import axios from 'axios';

const key = 'AIzaSyAuh-GDGYJoWy78eDrxAFdyUvV7l5dpQB4';
const url = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;

class GoogleMapService {
    getMaps() {
        return axios.get(`${url}`);
    }
}

export default GoogleMapService;