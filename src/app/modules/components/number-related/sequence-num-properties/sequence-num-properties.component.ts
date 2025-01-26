import { Component, Input } from '@angular/core';
import { InfoTooltipComponent } from '../../info-tooltip/info-tooltip.component';
import { TranslatePipe } from '@ngx-translate/core';
import { BelongsInformationsComponent } from './belongs-informations/belongs-informations.component';

@Component({
  selector: 'app-sequence-num-properties',
  standalone: true,
  imports: [InfoTooltipComponent, BelongsInformationsComponent, TranslatePipe],
  templateUrl: './sequence-num-properties.component.html',
  styleUrl: './sequence-num-properties.component.scss',
})
export class SequenceNumPropertiesComponent {
  @Input() numberInfo: any;
}
