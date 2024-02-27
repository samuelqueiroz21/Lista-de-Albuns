import {Text, View, StyleSheet} from 'react-native'
export function Album ({titulo,nameAlbum, year, musics,}){
  return(
    <View>
      <Text style={styles.titulos}>{titulo}</Text>
      <Text style={styles.albunsName}>{nameAlbum}({year})</Text>
      <Text style={styles.musicaName}>{musics.join('\n')}</Text>
    </View>
  )
}
const styles = StyleSheet.create(
    {
      musicaName:{
        fontSize:14,
        marginLeft:15,
        marginTop:-15,
      },
      albunsName:{
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
        margin: 15,
        marginTop: 11,
      },
      titulos:{
        margin: 0,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20,
        textAlign:'center'
      }
    }
  )