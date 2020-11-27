import { Component, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, Event } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AngularFireAnalytics } from '@angular/fire/analytics';
import { Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'platzi-store';
  public isBrowser: Boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router,
    analytics: AngularFireAnalytics
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    const navEndEvents$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    );

    navEndEvents$.subscribe((event: Event) => {
      const eventEnd = event as NavigationEnd;
      console.log('event inside', eventEnd);
      analytics.updateConfig({
        page_path: eventEnd.urlAfterRedirects,
      });
      analytics.logEvent('screen_view');
    });
  }
}
