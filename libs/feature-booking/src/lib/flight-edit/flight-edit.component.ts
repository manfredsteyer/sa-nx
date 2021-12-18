import { CommonModule } from '@angular/common';
import { Inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Component } from '@demo/util-shim';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: require('./flight-edit.component.html'),
})
export class FlightEditComponent implements OnInit {
  id: string | undefined;
  showDetails: string | undefined;
  showWarning = false;

  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((p) => {
      this.id = p['id'];
      this.showDetails = p['showDetails'];
    });
  }
}
