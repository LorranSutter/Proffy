import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import teachBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function Teach() {

    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                resizeMode='contain'
                source={teachBgImage}
                style={styles.content}
            >
                <Text style={styles.title}>Do you want to be a Proffy?</Text>
                <Text style={styles.description}>To start you have to register as a teach on our web platform.</Text>
            </ImageBackground>

            <RectButton style={styles.okButton} onPress={handleNavigateBack}>
                <Text style={styles.okButtonText}>Ok</Text>
            </RectButton>
        </View>
    );
}

export default Teach;