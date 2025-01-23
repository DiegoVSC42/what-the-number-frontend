import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './info-tooltip.component.html',
  styleUrl: './info-tooltip.component.scss',
})
export class InfoTooltipComponent {
  @Input() text: string = '';
  @Input() description: string = '';
}
