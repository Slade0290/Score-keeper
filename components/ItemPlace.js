import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PlaceService from '../services/place-service';
import {ImgPlace} from '../pages/HomePage';
import {ActivityIndicator} from 'react-native-paper';
import {Text, View, Button, StyleSheet} from 'react-native';
import {SwipeRow} from 'react-native-swipe-list-view';
import {connect} from 'react-redux';


class ItemPlace extends Component {
    static propTypes = {
        place: PropTypes.object.isRequired,
        onDelete: PropTypes.func.isRequired,
        onDetail: PropTypes.func.isRequired
    };

    state = {
        place: null
    };

    componentDidMount() {
        this.setState({place: this.props.place})
    }

    render() {
        return (
            <SwipeRow leftOpenValue={90} rightOpenValue={-75} key={this.props.place.id}>
                <View style={styles.standaloneRowBack}>
                    <Button title="Details" onPress={() => {
                        this.props.onDetail(this.props.place);
                    }}/>
                    <Button title="Suppr." onPress={() => this.props.onDelete(this.props.place.id)}/>
                </View>
                <View style={styles.standaloneRowFront}>

                    <View key={this.props.place.id} style={{alignItems: 'center'}}>
                        <Text style={{color:'white', fontSize: 18}}>{this.props.place.name}</Text>
                        {(this.props.place.opening_hours.open_now != null && this.props.place.opening_hours.open_now == true) ? (
                            <View>
                                <Text style={{color:'white'}}>Ce lieu est actuellement ouvert</Text>

                            </View>
                        ) : (
                            <View>
                                <Text style={{color:'white'}}>Ce lieu est actuellement fermé</Text>
                            </View>
                        )}
                    </View>
                </View>
            </SwipeRow>

        );
    }
}

const styles = StyleSheet.create({
    standaloneRowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        justifyContent: 'center',
        height: 80, 
        backgroundColor:'#5BC0BE',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        marginBottom: 2,
        color: 'white'
        
    },
    standaloneRowBack: {
        alignItems: 'center',
        backgroundColor: '#3A506B',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    },
    backTextWhite: {
        color: '#FFF',
    }
});

const mapStateToProps = (stateStore) => ({
    favoritesPlace: stateStore.favoritesReducer.favoritesPlace,
    detail: stateStore.detailReducer.placeDetail
});

export default connect(mapStateToProps)(ItemPlace);
