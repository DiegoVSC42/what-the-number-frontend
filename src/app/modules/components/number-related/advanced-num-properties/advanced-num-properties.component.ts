import { Component, Input } from '@angular/core';
import { InfoTooltipComponent } from '../../info-tooltip/info-tooltip.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-advanced-num-properties',
  standalone: true,
  imports: [InfoTooltipComponent, TranslatePipe],
  templateUrl: './advanced-num-properties.component.html',
  styleUrl: './advanced-num-properties.component.scss',
})
export class AdvancedNumPropertiesComponent {
  @Input() numberInfo: any;
}
