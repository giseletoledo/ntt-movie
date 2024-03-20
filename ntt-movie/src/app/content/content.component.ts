import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  movies = [
    { 
      imageUrl: 'https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg', 
      title: 'Homem-Aranha', 
      description: 'Em Homem-Aranha: De Volta ao Lar, depois de atuar ao lado dos Vingadores, chegou a hora de Peter Parker (Tom Holland) voltar para casa e para a sua vida, já não mais tão normal.' 
    },
    { 
      imageUrl: 'https://down-br.img.susercontent.com/file/8a907199c70c1a18a9447ebb3d1d7e82', 
      title: 'Vingadores', 
      description: 'Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. ' 
    },
    { 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1b01CCN5miKrlHg7pSb__D8kwGtG8jEgYw&usqp=CAU', 
      title: 'Marvels', 
      description: 'Capitã Marvel, Ms. Marvel e Monica Rambeau estão envolvidas em um misterioso fenômeno em que seus poderes estão interligados, fazendo com que elas troquem de lugar sem entender a causa para tal.' 
    },
    { 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TOAzebl6wAkJpZ0opPn6syrWPhcOkk9hSw&usqp=CAU', 
      title: 'Doutor Estranho', 
      description: 'Em Doutor Estranho no Multiverso da Loucura, após derrotar Dormammu e enfrentar Thanos nos eventos de Vingadores: Ultimato, o Mago Supremo, Stephen Strange (Benedict Cumberbatch), e seu parceiro Wong (Benedict Wong), continuam suas pesquisas sobre a Joia do Tempo.' 
    }
  ];
}
