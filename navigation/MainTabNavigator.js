import React from 'react';
import HomePage from "../pages/HomePage";
import TimerPage from "../pages/TimerPage";
import ProgressionPage from '../pages/ProgressionPage';
import AddFavoritePage from '../pages/AddFavoritePage';
import PlacePage from '../pages/PlacePage';
import CameraPage from '../pages/CameraPage';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/Ionicons';

const favoritesNavigator = createStackNavigator(
    {
        Favorites: {
            screen: ProgressionPage
        },
        PlaceDetail: {
            screen: PlacePage
        },
        Camera:{
            screen:CameraPage
        }
    },
    {
        initialRouteName: 'Favorites',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#053C5E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

const MapNavigator = createStackNavigator(
    {
        Map: {
            screen: TimerPage
        },
        MapDetail: {
            screen: PlacePage
        }
    },
    {
        initialRouteName: 'Map',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#053C5E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

const HomeNavigator = createStackNavigator(
    {
        Home: {
            screen: HomePage
        }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#053C5E',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

const tabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel: 'GOAL',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-star'} />
                ),
                barStyle: { backgroundColor: '#053C5E' }
            }
        },
        Map: {
            screen: MapNavigator,
            navigationOptions: {
                tabBarLabel: 'TIMER',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-timer'} />
                ),
                barStyle: { backgroundColor: '#053C5E' }
            }
        },
        Favorites: {
            screen: favoritesNavigator,
            navigationOptions: {
                tabBarLabel: 'PROGRESSION',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} size={25} name={'ios-podium'} />
                ),
                barStyle: { backgroundColor: '#053C5E' }
            }
        }
    },
    {
        initialRouteName: 'Home'
    }
);

export default tabNavigator;