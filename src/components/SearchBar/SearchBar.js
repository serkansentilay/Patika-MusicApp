import React from 'react';
import {TextInput,View} from 'react-native';
import styles from './SearchBar.style';

const SearchBar =(props)=>{
  
    return(
        <View style={styles.container}>
            <TextInput style={styles.textinput} placeholderTextColor='black' placeholder='Ara...' onChangeText={props.onSearch}/>
        </View>
    )
}

export default SearchBar;