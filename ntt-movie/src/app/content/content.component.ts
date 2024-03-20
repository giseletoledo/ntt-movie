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
      imageUrl: 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg', 
      title: 'Vingadores', 
      description: 'Em Vingadores: Ultimato, após Thanos eliminar metade das criaturas vivas em Vingadores: Guerra Infinita, os heróis precisam lidar com a dor da perda de amigos e seus entes queridos. ' 
    },
    { 
      imageUrl: 'https://lumiere-a.akamaihd.net/v1/images/image_2a250270.png', 
      title: 'Marvels', 
      description: 'Capitã Marvel, Ms. Marvel e Monica Rambeau estão envolvidas em um misterioso fenômeno em que seus poderes estão interligados, fazendo com que elas troquem de lugar sem entender a causa para tal.' 
    },
    { 
      imageUrl: 'https://br.web.img3.acsta.net/pictures/16/09/29/21/15/495786.jpg', 
      title: 'Doutor Estranho', 
      description: 'Em Doutor Estranho no Multiverso da Loucura, após derrotar Dormammu e enfrentar Thanos nos eventos de Vingadores: Ultimato, o Mago Supremo, Stephen Strange (Benedict Cumberbatch), e seu parceiro Wong (Benedict Wong), continuam suas pesquisas sobre a Joia do Tempo.' 
    }
  ];
}
