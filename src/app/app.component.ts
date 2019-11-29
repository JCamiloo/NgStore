import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
declare var gtag;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 

  constructor(private router: Router) {

    const navEndEvent$ = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    );
    
    navEndEvent$.subscribe((event: NavigationEnd) => {
      gtag('config', 'UA-153566126-1', { page_path: event.urlAfterRedirects });
    });
  }
}
