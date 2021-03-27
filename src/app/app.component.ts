import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
