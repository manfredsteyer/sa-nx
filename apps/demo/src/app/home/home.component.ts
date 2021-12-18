import { Component } from "@demo/shim";

@Component({
  standalone: true,
  template: require('./home.component.html')
})
export class HomeComponent {
  constructor() { }
}
