import React from 'react';
import { View, Button, TextInput } from 'react-native';
import PlaceService from '../services/place-service';
import { addAsync } from '../redux/actions/PlacesActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddFavoritePage extends React.Component {

    static navigationOptions = {
        title: 'Ajouter un emplacement'
    };

    serv = new PlaceService();

    state = {
        placeName: ''
    };

    changeText(value) {
        this.setState({ placeName: value });
    }

    onPressAdd() {
        this.props.actions.addPlace(this.state.placeName);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput onChangeText={(text) => this.changeText(text)} />
                <Button title="Ajouter" onPress={() => this.onPressAdd()} />
            </View>
        );
    }
}

const mapActionsToProps = (payload) => ({
    actions: {
        addPlace: bindActionCreators(addAsync, payload)
    }
});

export default connect(null, mapActionsToProps)(AddFavoritePage);