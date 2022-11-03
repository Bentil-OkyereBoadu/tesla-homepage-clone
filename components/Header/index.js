import React from 'react'
import { View, Image } from 'react-native'
import styles from './styles'

const Header = () => {
  return (
    <View style={ styles.container}>
        <Image style={styles.logo} source={require('../../assets/tesla/images/logo.png')}/>
        <Image style={styles.menu} source={require('../../assets/tesla/images/menu.png')}/>
    </View>
  )
}

export default Header