import { RouterModule } from '@angular/router';
import { Component } from '@demo/util-shim';

@Component({
  standalone: true,
  selector: 'demo-sidebar-cmp',
  imports: [RouterModule],
  template: require('./sidebar.component.html'),
})
export class SidebarComponent {}
