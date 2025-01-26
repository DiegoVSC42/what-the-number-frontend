import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-belongs-informations',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './belongs-informations.component.html',
  styleUrl: './belongs-informations.component.scss',
})
export class BelongsInformationsComponent {
  @Input() value: any;
  @Input() nthTerm: any;
  @Input() position: any;

  ordinalSufix(value: number): string {
    if (value == 1) {
      return 'st';
    } else if (value == 2) {
      return 'nd';
    } else if (value == 3) {
      return 'rd';
    } else {
      return 'th';
    }
  }
}
