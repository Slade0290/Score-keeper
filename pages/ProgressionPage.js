import React from 'react';
import { Text, View, Button, AsyncStorage, FlatList, RefreshControl, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationEvents } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import ItemPlace from '../components/ItemPlace';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {initFavoritesAsync,deleteAsync} from "../redux/actions/FavoritesActions";
import {addPlaceDetailAsync, initPlaceDetailAsync} from "../redux/actions/PlaceDetailActions";

class FavoritePage extends React.Component {

    static navigationOptions = (data) => {
        const { navigation } = data;
        return {
            title: 'Progression',
        }
    };

    state = { 
        //places: [], 
        //refreshing: false
    };

    /*
    refresh() {
        this.setState({ refreshing: true });
        this.props.actions.initFavorites();
        this.setState({ refreshing: false });
    }

    deletePlace(id){
        this.props.actions.deletePlace(id);
    }

    goToDetails(place){
        console.log('place',place);
        const {navigate} = this.props.navigation;
        this.props.actions.addPlaceDetail(place);
        navigate('PlaceDetail');
    }
    
    componentDidMount() {
        this.props.actions.initPlaceDetail();
    }
    */
    render() {
        console.log('render');
        return (
            /*<ScrollView style={{ flex: 1, backgroundColor:'#3A506B' }}>
                <View style={{ flex: 1 }}>
                    <NavigationEvents onDidFocus={() => this.refresh()} />
                    <FlatList data={this.props.favorites}
                        refreshControl={<RefreshControl refreshing={this.state.refreshing}
                            onRefresh={() => this.refresh()} />}
                        renderItem={(element) => (
                            <ItemPlace key={element.item} place={element.item}
                                onDelete={(place) => this.deletePlace(place.id)}
                                onDetail={(place) => this.goToDetails(place)}
                            />
                        )} />
                </View>
            </ScrollView>
            */
            <View>
                <Text>
                    Hello, I'm a historic !
                </Text>
            </View>
        );
    }
}

const mapStateToProps = (stateStore) => {

    return ({
        favorites: stateStore.favoritesReducer.favoritesPlace,
        detail: stateStore.detailReducer.placeDetail
    });
};

const mapActionsToProps = (payload) => ({
    actions: {
        initFavorites: bindActionCreators(initFavoritesAsync,payload),
        deletePlace: bindActionCreators(deleteAsync,payload),
        initPlaceDetail: bindActionCreators(initPlaceDetailAsync,payload),
        addPlaceDetail: bindActionCreators(addPlaceDetailAsync, payload)
    }
});

export default connect(mapStateToProps, mapActionsToProps)(FavoritePage);