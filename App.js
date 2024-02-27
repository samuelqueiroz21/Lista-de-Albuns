import { Text, SafeAreaView, StyleSheet } from 'react-native';
import {Album} from './components/album'

export default function App() {
  return (
    <SafeAreaView>

      <Album
        titulo={'Álbuns da Banda Oficina G3'}
        nameAlbum={'Indiferença'}
        year={1996}
        musics={['1.Davi', '2.Fé', '3.Magia alguma', '4.Glória', '5.Profecias']}
      />
      <Album
        nameAlbum={'Alem do que os olhos podem ver'}
        year={2004}
        musics={['1.Intro', '2.Mais Alto', '3.Réu ou Juiz', '4.Meu Legado', '5.Através da Porta']}
      />
      <Album
        nameAlbum={'Depois da Guerra'}
        year={2008}
        musics={['1.D.A.G', '2.Meus Próprios Meios', '3.Eu Sou', '4.Meus Passos', '5.Continuar']}
      />
      
    </SafeAreaView>
  );
}


