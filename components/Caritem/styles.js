import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    carContainer: {
      width: '100%',
      height: '100%'
    },
    titles:{
      marginTop: '30%',
      width:'100%',
      alignItems: 'center'
    },
    title:{
      fontSize: 40,
      fontWeight: '500',
    },
    subtitles:{
      fontSize: 16,
      color: '#5c5e62' 
    },
    image:{
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      position: 'absolute'
    }
  });

  export default Styles;