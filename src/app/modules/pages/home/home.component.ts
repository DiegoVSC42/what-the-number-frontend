import { Component, NgModule, OnInit } from '@angular/core';
import { NumberInfo } from '../../interfaces/NumberInfo';
import { NumberInfoService } from '../../services/NumberInfo.service';
import { CommonModule } from '@angular/common';
import { BasicNumPropertiesComponent } from '../../components/number-related/basic-num-properties/basic-num-properties.component';
import { SequenceNumPropertiesComponent } from '../../components/number-related/sequence-num-properties/sequence-num-properties.component';
import { AdvancedNumPropertiesComponent } from '../../components/number-related/advanced-num-properties/advanced-num-properties.component';
import { DigitBasedOperationsComponent } from '../../components/number-related/digit-based-operations/digit-based-operations.component';
import { AlternativeRepresentationsComponent } from '../../components/number-related/alternative-representations/alternative-representations.component';
import { OtherMathematicalOperationsComponent } from '../../components/number-related/other-mathematical-operations/other-mathematical-operations.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { InfoTooltipComponent } from '../../components/info-tooltip/info-tooltip.component';
import { ThemeSwitchComponent } from '../../components/theme-switch/theme-switch.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    BasicNumPropertiesComponent,
    SequenceNumPropertiesComponent,
    AdvancedNumPropertiesComponent,
    DigitBasedOperationsComponent,
    AlternativeRepresentationsComponent,
    OtherMathematicalOperationsComponent,
    FooterComponent,
    ThemeSwitchComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  numberInfo: NumberInfo | null = null;

  constructor(private numberInfoService: NumberInfoService) {}

  analyzeNumber(value: string) {
    console.log('entrei');
    this.numberInfoService
      .getNumberInfo(BigInt(value))
      .subscribe((data: NumberInfo | null) => {
        console.log(data);
        this.numberInfo = data;
      });
  }
}
