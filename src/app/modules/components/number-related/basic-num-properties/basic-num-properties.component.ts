import { Component, Input } from '@angular/core';
import { InfoTooltipComponent } from '../../info-tooltip/info-tooltip.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-basic-num-properties',
  standalone: true,
  imports: [InfoTooltipComponent, TranslatePipe],
  templateUrl: './basic-num-properties.component.html',
  styleUrl: './basic-num-properties.component.scss',
})
export class BasicNumPropertiesComponent {
  @Input() numberInfo: any;
}
