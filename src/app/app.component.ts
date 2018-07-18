import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SimpleSmoothScrollOption, SimpleSmoothScrollService } from 'ng2-simple-smooth-scroll/lib';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private smooth: SimpleSmoothScrollService,
    private title: Title) {
  }

  ngOnInit(): void {
    this.router.events
      .subscribe(event => {
        if (event instanceof  NavigationEnd) {
          const url = event['url'];
          const param = url.substring(url.lastIndexOf('/') + 1, url.length);
          this.title.setTitle('Ритуальные услуги в Волгограде - ритуальная служба и ритуальные магазины ' + param.toLocaleUpperCase());
          this.smooth.smoothScrollToTop(new SimpleSmoothScrollOption(800, 'ease-in'));
        }
      });
  }
}

