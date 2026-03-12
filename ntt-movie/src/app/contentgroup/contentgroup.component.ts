import { Component } from '@angular/core';
import { ContentComponent } from '../content/content.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contentgroup',
  standalone: true,
  templateUrl: './contentgroup.component.html',
  styleUrl: './contentgroup.component.css',
  imports: [ContentComponent, FooterComponent]

})
export class ContentgroupComponent {

}
