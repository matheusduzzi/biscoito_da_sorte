import React, { Component } from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity , Image 
} from 'react-native';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {

      textoFrase:'',
      img:require('./src/biscoito.png'),
    };
    this.frases = [
      'Um homem feliz está satisfeito demais com o presente para pensar demais no futuro'
      ,'Ocupe-se vivendo ou ocupe-se morrendo'
      ,'A vida encolhe ou se expande na proporção da coragem que uma pessoa tem'
      ,'Sonhe como se você fosse viver para sempre, viva como se fosse morrer hoje'
      ,'Fazer o que você gosta é liberdade. Gostar do que você faz é felicidade'
      ,'Não deixe o que você não pode fazer interferir no que pode'
      ,'Não é para o que você olha que importa, é o que você vê'
      ,'É difícil abater uma pessoa que nunca desiste'
      ,'Não julgue cada dia pelo quanto você colhe, mas pelas sementes que planta'
      ,'Escreva no seu coração que cada dia é o melhor do ano'
      ,'Todo momento é um novo começo'
      ,'O tipo de liberdade mais importante é ser quem você é'
      ,'A perfeição não é atingível, mas, se a buscarmos, podemos alcançar a excelência'
      ,'Tempos duros nunca persistem, mas as pessoas duras, sim'
      ,'Não espere. O momento pode nunca ser o certo'
      ,'A hora é sempre certa para fazer a coisa certa'
      ,'A vida é experimentar coisas para ver se elas funcionam'
      ,'Se você não gosta da estrada que está percorrendo, comece a construir outras'
      ,'Faça o que sente no seu coração que é certo — já que vai ser criticado pelo que quer que faça'
      ,'Todos nós estamos na sarjeta, mas alguns de nós estão olhando para as estrelas'
      ,'É divertido fazer o impossível'];
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(){

    let numeroAleatorio = Math.floor(Math.random() * this.frases.length );

    this.setState({
      textoFrase: ' "' + this.frases[numeroAleatorio] + '" ',
      img: require('./src/biscoitoAberto.png')
    })

  }
  
  render(){

    return(
      <View style={styles.container}>

        <Image
          source={this.state.img}
          style={styles.img}
        />

        <Text style={styles.textoFrase}>
          {this.state.textoFrase}
        </Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Abrir biscoito
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img:{
    height:250,
    width:250,
  },
  textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  botao:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius: 20
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    fontSize:18,
    fontWeight:'bold',
    color:'#dd7b22'
  }
});

export default App;