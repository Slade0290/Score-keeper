import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import PlaceService from '../services/place-service';
import { LinearGradient } from 'expo-linear-gradient';
import Loading from '../components/Loading';
import { connect } from 'react-redux';
import { onToggle } from "../redux/actions/FavoritesActions";
import { initCommentsAsync, onToggleCommentAsync, deleteCommentAsync } from "../redux/actions/CommentsActions";
import { bindActionCreators } from "redux";
import { initPlaceAsync } from "../redux/actions/PlacesActions";
import { TextInput } from 'react-native-paper';

class PlacePage extends React.Component {

    static navigationOptions = (data) => {
        const {navigation} = data;
        return {
            title: 'Détails',
            headerRight: (
                <Icon style={{padding:25}} size={25} name={'ios-camera'}
                      onPress={() => {
                            navigation.push('Camera')
                      }} />
            )

        }
    };

    state = {
        place: null,
        comment: '',
        placeID: '',
        placeName: ''
    };

    componentDidMount() {

        this.props.actions.ini

        console.log("this.props", this.props);
        //console.log("this.props.detail[0].id : ", this.props.detail[0].id)
        this.setState({
            place: this.props.detail[0],
            placeID: this.props.detail[0].id,
            placeName: this.props.detail[0].name
        })
        //console.log("---- place : ", this.state.place)
        //console.log("---- placeID : ", this.state.placeID)

        this.props.actions.initComments();
        /*
        this.props.placeServ.getPlaceHome().then((resp) => {
            this.setState({ wea: resp.data });
        });
        */
    }

    toggleFavorite(place) {
        console.log('toggle');
        this.props.actions.toggleFavorites(place)
    }

    letsGo() {
        const { navigate } = this.props.navigation;
        navigate('Map', {
            showResto: false,
            marker: this.state.place,
            letsGo: true
        })
    }

    submitComment(text) {
        console.log("text : ", text)
        const comment = {
            text: text,
            id: this.state.placeID,
            placeName: this.state.placeName,
            date: new Date().toString()
        }
        this.props.actions.toggleComments(comment)
    }

    handleComment = (text) => {
        this.setState({ comment: text })
    }

    showComments() {
        if (this.props.comments.length > 0) {
            console.log("---------------------------- In showComments in first if");
            console.log("this.props.comments : ", this.props.comments);
            //if (this.props.comments.placeID == this.state.placeID) {
            console.log("---------------------------- In showComments in last if");
            return this.props.comments.map((comment, i) =>
                (
                    <View key={i} style={{ alignItems: "center", alignContent: "center" }}>
                        <Text style={{ color: 'white', fontSize: 15 }}
                        >{comment.text}</Text>
                        <TouchableOpacity style
                            onPress={() => { this.props.actions.deleteComment(comment.id) }}
                            style={{ backgroundColor: '#5BC0BE', color: 'white', padding: 10, borderRadius: 5, fontSize: 15 }}>

                            <Icon color={'white'} size={20} name={'ios-trash'} />
                        </TouchableOpacity>
                    </View>
                ))
            //}
        }
    }

    render() {
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#3A506B' }}>
                {this.state.place != null ? (
                    <View>
                        <View style={{ alignItems: 'center', margin: 15, padding: 15, backgroundColor: 'white', borderRadius: 20 }}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={{ uri: this.state.place.icon }}
                            />
                            <Text style={{
                                fontSize: 20,
                                padding: 25,
                                color: '#5BC0BE'
                            }}>
                                {this.state.place.name}
                            </Text>
                            <Icon size={25} name={'ios-heart'} onPress={() => this.toggleFavorite(this.state.place)} />
                        </View>
                        <TouchableOpacity
                            onPress={() => {
                                this.letsGo()
                            }}
                            style={{
                                backgroundColor: '#5BC0BE',
                                color: 'white',
                                padding: 5,
                                borderRadius: 5,
                                alignItems: 'center',
                                marginRight: 15,
                                marginLeft: 15,
                                marginTop: 15
                            }}>
                            <Text style={{ color: 'white', fontSize: 13 }}>Aller à ce restaurant</Text>
                        </TouchableOpacity>
                        <TextInput style={{
                            borderRadius: 5,
                            marginTop: 15,
                            marginLeft: 15,
                            marginRight: 15
                        }}
                            placeholder="Ecrire un commentaire"
                            onChangeText={this.handleComment} />
                        <TouchableOpacity
                            onPress={() => {
                                this.submitComment(this.state.comment);
                            }}
                            style={{
                                backgroundColor: '#5BC0BE',
                                padding: 5,
                                borderRadius: 5,
                                alignItems: 'center',
                                marginRight: 15,
                                marginLeft: 15
                            }}
                        >
                            <Text style={{ color: 'white', fontSize: 13 }}>Valider</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                        <Loading displayColor='#5BC0BE'>
                            <Text>Chargement des détails du lieu...</Text>
                        </Loading>
                    )}
                <View style={{ alignContent: 'center' }}>
                    {this.props.comments != null ? (
                        <View style={{ alignItems: "center" }} >
                            <Text style={{ color: 'white', fontSize: 25, paddingBottom: 10 }}>Commentaires</Text>
                            <Icon color={'white'} size={20} name={'ios-paper'} />
                            {this.showComments()}
                        </View>
                    ) : (

                            <Text>Chargement des commentaires...</Text>
                        )}

                    {/* <View>

                    <TextInput
                        placeholder="Ecrire un commentaire"
                        onChangeText={this.handleComment} />
                    <TouchableOpacity
                        onPress={() => {
                            this.submitComment(this.state.comment);
                        }}
                        style={{
                            backgroundColor: '#5BC0BE',
                            color: 'white',
                            padding: 5,
                            borderRadius: 5,
                            marginRight: 5
                        }}
                    >
                        <Icon color={'white'} size={20} name={'ios-paper'} />
                    </TouchableOpacity>
                </View> */}
                </View>
            </ScrollView>
        );
    }
}

const mapStateToProps = (stateStore) => {
    return ({
        places: stateStore.favoritesReducer.favoritesPlace,
        detail: stateStore.detailReducer.placeDetail,
        comments: stateStore.commentReducer.comments
    })
};

const mapActionsToProps = (payload) => ({
    actions: {
        toggleFavorites: bindActionCreators(onToggle, payload),
        toggleComments: bindActionCreators(onToggleCommentAsync, payload),
        initComments: bindActionCreators(initCommentsAsync, payload),
        deleteComment: bindActionCreators(deleteCommentAsync, payload)
    }
});

export default connect(mapStateToProps, mapActionsToProps)(PlacePage);

