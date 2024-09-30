import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-global-footer',
  templateUrl: './global-footer.component.html',
  styleUrls: ['./global-footer.component.scss'],
})
export class GlobalFooterComponent implements AfterViewInit {
  @ViewChild('trustbox', { static: false }) trustbox: ElementRef;
  currentYear: number = new Date().getFullYear();

  ngAfterViewInit() {
    const trustPilotScript = document.createElement('script');
    trustPilotScript.type = 'text/javascript';
    trustPilotScript.src = '//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js';
    trustPilotScript.async = true;
    document.head.appendChild(trustPilotScript);

    trustPilotScript.onload = () => {
      if (this.trustbox.nativeElement) {
        // @ts-ignore
        window.Trustpilot.loadFromElement(this.trustbox.nativeElement);
      }
    };
  }
}
