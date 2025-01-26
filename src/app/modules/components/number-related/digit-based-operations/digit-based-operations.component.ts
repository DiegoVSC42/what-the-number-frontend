import { TranslatePipe } from '@ngx-translate/core';
import { NumberInfo } from './../../../interfaces/NumberInfo';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-digit-based-operations',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './digit-based-operations.component.html',
  styleUrl: './digit-based-operations.component.scss',
})
export class DigitBasedOperationsComponent {
  @Input() numberInfo: any;
}
