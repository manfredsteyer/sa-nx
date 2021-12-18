import { CommonModule } from '@angular/common';
import { EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CityPipe } from '@demo/ui-city';
import { Flight } from '@demo/domain-booking';
import { Component } from '@demo/util-shim';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, CityPipe],
  selector: 'demo-flight-card',
  template: require('./flight-card.component.html'),
})
export class FlightCardComponent {
  @Input() item: Flight | undefined;
  @Input() selected: boolean | undefined;
  @Output() selectedChange = new EventEmitter<boolean>();

  select() {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(false);
  }
}
