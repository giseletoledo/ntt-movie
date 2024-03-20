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
      description: 'Description of Spiderman' 
    },
    { 
      imageUrl: 'https://down-br.img.susercontent.com/file/8a907199c70c1a18a9447ebb3d1d7e82', 
      title: 'Vingadores', 
      description: 'Description of Movie 2' 
    },
    { 
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1b01CCN5miKrlHg7pSb__D8kwGtG8jEgYw&usqp=CAU', 
      title: 'Marvels', 
      description: 'Description of Movie 3' 
    },
    { 
      imageUrl: 'path/to/image4.jpg', 
      title: 'Movie Title 4', 
      description: 'Description of Movie 4' 
    }
  ];
}
