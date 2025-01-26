import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-alternative-representations',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './alternative-representations.component.html',
  styleUrl: './alternative-representations.component.scss',
})
export class AlternativeRepresentationsComponent {
  @Input() numberInfo: any;
}
