import axios from 'axios';

const key = 'AIzaSyAuh-GDGYJoWy78eDrxAFdyUvV7l5dpQB4';
const radius = 1500;
const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500&types=restaurant&key=AIzaSyAuh-GDGYJoWy78eDrxAFdyUvV7l5dpQB4`;
const urlBar = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500&types=bar&key=AIzaSyAuh-GDGYJoWy78eDrxAFdyUvV7l5dpQB4`;

class PlaceService {

    getBarRestau(lat, lng) {
        const coord = `${lat},${lng}`;
        return axios.get(`${url}&location=${coord}`);
    }
}

export default PlaceService;


