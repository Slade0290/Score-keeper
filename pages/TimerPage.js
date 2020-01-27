import React from 'react';
import MapView from "react-native-maps";
import Loading from '../components/Loading';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import MapViewDirections from "react-native-maps-directions";
import { initPlaceAsync } from '../redux/actions/PlacesActions';
import { initPlaceDetailAsync, addPlaceDetailAsync, deletePlaceDetailAsync } from '../redux/actions/PlaceDetailActions';
import Icon from 'react-native-vector-icons/Ionicons';
import { bindActionCreators } from 'redux';

class MapPage extends React.Component {

  static navigationOptions = (data) => {
    const { navigation } = data;
    return {
      title: 'Timer'
      /*headerRight: (
        <TouchableOpacity
          onPress={() => {
            navigation.setParams({ showRestaurant: true });
            navigation.setParams({ showResto: true });
            navigation.setParams({ showDestination: false });
          }}
          style={{ backgroundColor: '#5BC0BE', color: 'white', padding: 5, borderRadius: 5, marginRight: 5 }}
        >
          <Text>
            <Icon size={15} name={'ios-search'} /> Afficher les restaurants
          </Text>
        </TouchableOpacity >
      )*/
    }
  };

  state = {
    ready: true
    /*,
    region: {
      latitude: null,
      longitude: null,
      longitudeDelta: 0.092,
      latitudeDelta: 0.0421
    },
    myPosition: [],
    markers: [],
    oneDirection: false,
    destination: [],
    error: null,
    */
  };

  componentDidMount() {
    /*
    this.props.navigation.setParams({ showRestaurant: false });
    this.props.navigation.setParams({ showDestination: true });
    //console.log("this.props.navigation : ", this.props.navigation);
    let geoOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 60 * 60 * 24
    };
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoFailure, geoOptions);
    */
  }
  /*
  geoFailure = (err) => {
    this.setState({ error: err.message })
  };

  geoSuccess = (position) => {
    this.setState({
      region: {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        latitudeDelta: 0.092,
        longitudeDelta: 0.0421
      },
      myPosition: [{
        title: 'Ma position',
        coordinates: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }
      }],
      ready: true
    });
    this.props.actions.initPlace();
    this.props.actions.initPlaceDetail();
    this.props.placeServ.getBarRestau(this.state.region.latitude, this.state.region.longitude).then((resp) => {
      this.setState({ markers: resp.data.results });
      // console.log("resp : ", resp);
    });
  };

  showMyMarker() {
    const myPos = this.state.myPosition;
    if (myPos[0].coordinates != null || myPos[0].coordinates !== undefined) {
      return <MapView.Marker
        coordinate={myPos[0].coordinates}
        title={myPos[0].title}
        icon={myPos[0].icon}
      >
        <View style={{ height: 20, width: 20, borderRadius: 10, backgroundColor: 'green', borderWidth: 2, borderColor: '#fff', opacity: 0.8 }} />
      </MapView.Marker>
    }
    return null;
  }

  showMyDestination() {
    const { navigation } = this.props;
    const go = navigation.getParam('letsGo', false);
    const dest = this.state.destination;
    console.log("dest : ", dest)
    if ((dest != null || dest != undefined) && go) {
      console.log();
      return <MapView.Marker
        coordinate={{
          latitude: dest.geometry.location.lat,
          longitude: dest.geometry.location.lng
        }}
        title={dest.name}
      >
      </MapView.Marker>
    }
    return null;
  }

  showMarkers() {
    const { navigation } = this.props;
    const show = navigation.getParam('showResto', false);
    if (this.state.markers.length > 0
      && this.props.navigation.state.params.showRestaurant === true
      && show) {
      //console.log('showmarker',this.props.navigation);
      return this.state.markers.map((marker, i) =>
        (
          <MapView.Marker
            key={i}
            coordinate={{
              latitude: marker.geometry.location.lat,
              longitude: marker.geometry.location.lng
            }}
            title={marker.name}
            onCalloutPress={() => this.getDetail(marker)}
          />
        ))
    }
    return null;
  }

  letsGo() {
    const { navigation } = this.props;
    const letsGo = navigation.getParam('letsGo', false);
    const marker = navigation.getParam('marker', null);
    let location = {};
    if (marker != null) {
      location = marker.geometry.location;
    }
    if (letsGo === true && marker != null && !this.props.navigation.state.params.showDestination) {
      return <MapViewDirections apikey={'AIzaSyAuh-GDGYJoWy78eDrxAFdyUvV7l5dpQB4'}
        origin={{ latitude: this.state.region.latitude, longitude: this.state.region.longitude }}
        destination={{
          latitude: location.lat,
          longitude: location.lng
        }}
        strokeWidth={5}
        strokeColor='#5BC0BE' />
    }
    return null;
  }

  getDetail(marker) {
    //console.log('getDetail', this.props);
    const { navigate } = this.props.navigation;
    this.props.actions.addPlaceDetail(marker);
    this.setState({ destination: marker });
    navigate('MapDetail')
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.ready !== false ? (
          <MapView
            style={styles.map}
            region={this.state.region}
            initialRegion={this.state.region}
          >
            {this.showMyMarker()}
            {this.showMarkers()}
            {this.letsGo()}
            {this.showMyDestination()}
          </MapView>
        ) : (
            <Loading displayColor='#5BC0BE'>
              <Text>Géolocatlisation en cours</Text>
            </Loading>
          )
        }
      </View>
    );
  }
}
*/

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.ready !== false ? (
          <View>
            <Text>
              Hello, I'm a timer !
            </Text>
          </View>
        ) : (
            <Loading displayColor='#5BC0BE'>
              <Text>Géolocatlisation en cours</Text>
            </Loading>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
});

const mapStateToProps = (stateStore) => {
  return ({
    placeServ: stateStore.serviceReducer.PlaceService,
    detail: stateStore.detailReducer.placeDetail
  })
};

const mapActionsToProps = (payload) => ({
  actions: {
    initPlace: bindActionCreators(initPlaceAsync, payload),
    initPlaceDetail: bindActionCreators(initPlaceDetailAsync, payload),
    addPlaceDetail: bindActionCreators(addPlaceDetailAsync, payload),
    deletePlaceDetail: bindActionCreators(deletePlaceDetailAsync, payload)
  }
});

export default connect(mapStateToProps, mapActionsToProps)(MapPage);