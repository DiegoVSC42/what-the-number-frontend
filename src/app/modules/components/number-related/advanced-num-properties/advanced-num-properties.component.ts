import { Component, Input } from '@angular/core';
import { InfoTooltipComponent } from '../../info-tooltip/info-tooltip.component';

@Component({
  selector: 'app-advanced-num-properties',
  standalone: true,
  imports: [InfoTooltipComponent],
  templateUrl: './advanced-num-properties.component.html',
  styleUrl: './advanced-num-properties.component.scss',
})
export class AdvancedNumPropertiesComponent {
  @Input() numberInfo: any;
}
