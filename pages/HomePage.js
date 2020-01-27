import React from 'react';
import Loading from '../components/Loading';
import { Text, View, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { initCommentsAsync } from "../redux/actions/CommentsActions";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { ImageBackground } from 'react-native';

class HomePage extends React.Component {

    static navigationOptions = (data) => {
        return {
            title: 'SOLO LEVELING - On the way to S rank',
        }
    };

    state = {
        pushUpsComplete: false,
        curlUpsComplete: false,
        squatsComplete: false,
        runningComplete: false,
        nbPushUps : 0,
        nbCurlUps : 0,
        nSquats : 0,
        nbKmRunning : 0
    };

    componentDidMount() {
        this.props.actions.initComments();
    }

    render() {
        return (
            <ImageBackground source={require('../assets/0123.jpg')} style={{width: '100%', height: '100%'}}>
                {this.props.comments != null ? (
                        <Text style={{fontSize:20, 
                            padding:15, 
                            textAlign: 'center',
                            color:'#FFFFFF'}}>DAILY QUEST - GETTING READY TO BECOME POWERFUL{"\n\n\n"}
                        <Text style={{color: '#00FF22', fontWeight: 'bold', fontSize: 25}}>GOAL</Text>{"\n\n\n\n"}
                        
                            <Text style={{fontSize: 25}}>
                                ({this.state.pushUpsComplete ? "COMPLETE" : "INCOMPLETE"}) PUSH-UPS 
                                [{this.state.nbPushUps}/100]{"\n\n"}
                                ({this.state.curlUpsComplete ? "COMPLETE" : "INCOMPLETE"}) CURL-UPS 
                                [{this.state.nbCurlUps}/100]{"\n\n"}
                                ({this.state.squatsComplete ? "COMPLETE" : "INCOMPLETE"}) SQUATS 
                                [{this.state.nSquats}/100]{"\n\n"}
                                ({this.state.runningComplete ? "COMPLETE" : "INCOMPLETE"}) RUNNING 
                                [{this.state.nbKmRunning}/10km]{"\n\n\n"}
                            </Text>
                            <Text style={{color: '#FF0022'}}>WARNING!</Text> - FAILING TO COMPLETE THIS DAILY QUEST WILL BRING A PUNISHMENT ASSOCIATED WITH THIS QUEST.
                        </Text>
                ) : (
                        <Loading displayColor='#5BC0BE'>
                            <Text>Chargement des objectifs quotidien...</Text>
                        </Loading>
                )}
            </ImageBackground>
        );
    }
}

const mapStateToProps = (stateStore) => {
    return ({
        comments: stateStore.commentReducer.comments
    })
};

const mapActionsToProps = (payload) => ({
    actions: {
        initComments: bindActionCreators(initCommentsAsync, payload)
    }
});

export default connect(mapStateToProps, mapActionsToProps)(HomePage);
