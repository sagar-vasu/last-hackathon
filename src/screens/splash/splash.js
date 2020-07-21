import React from 'react';

import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animatable_singup: null,
      animatable_login: null,
    };
  }

  onIndexChanged = (index) => {
    if (index == 2) {
      this.setState({
        animatable_singup: 'bounceInLeft',
        animatable_login: 'bounceInRight',
      });
    } else {
      this.setState({
        animatable_singup: null,
        animatable_login: null,
      });
    }
  };
  render() {
    return (
      <Swiper
        loop={false}
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activedot} />}
        onIndexChanged={(index) => this.onIndexChanged(index)}>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../../assets/asset1.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Cloud Storage</Text>
            <Text style={styles.text}>
              Cloud Data Warehouse Solutions With SAP®, And Try Our 30-Day Free
              Trial. Achieve Outcomes
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../../assets/asset2.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Share Storage</Text>
            <Text style={styles.text}>
              Cloud Data Warehouse Solutions With SAP®, And Try Our 30-Day Free
              Trial. Achieve Outcomes
            </Text>
          </View>
        </View>
        <View style={styles.slide}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('../../assets/asset3.png')}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.footer}>
            <Text style={styles.title}>Save Storage</Text>
            <Text style={styles.text}>
              Cloud Data Warehouse Solutions With SAP®, And Try Our 30-Day Free
              Trial. Achieve Outcomes
            </Text>

            <View style={styles.container}>
              <Animatable.View
                animation={this.state.animatable_singup}
                delay={0}
                duration={1500}
                useNativeDriver>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[
                    styles.button,
                    {
                      borderColor: '#3465d9',
                      borderWidth: 1,
                      borderRadius: 50,
                      marginTop: 15,
                    },
                  ]}>
                  <Text style={styles.signupText}>Signup</Text>
                </TouchableOpacity>
              </Animatable.View>

              <Animatable.View
                animation={this.state.animatable_login}
                delay={0}
                duration={1500}
                useNativeDriver>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={[
                    styles.button,
                    {
                      backgroundColor: '#3465d9',
                      borderWidth: 1,
                      borderRadius: 50,
                      marginTop: 15,
                      marginLeft: 20,
                    },
                  ]}>
                  <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>
              </Animatable.View>
            </View>
          </View>
        </View>
      </Swiper>
    );
  }
}

const {width, height} = Dimensions.get('screen');

const height_image = height * 0.5 * 0.8;
const width_image = height_image * 1.1;

const width_button = width * 0.3;

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },

  footer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: width_image,
    height: height_image,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#3465d9',
  },
  text: {
    color: 'grey',
    textAlign: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(52,101,217,0.4)',
    marginHorizontal: 5,
    marginVertical: 3,
  },
  activedot: {
    backgroundColor: '#3465d9',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 5,
    marginVertical: 3,
  },
  container: {
    flexDirection: 'row',
  },

  button: {
    width: width_button,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupText: {
    color: '#3465d9',
  },
  loginText: {
    color: 'white',
  },
});
