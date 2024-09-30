import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-apr-logo',
  standalone: true,
  imports: [],
  templateUrl: './apr-logo.component.html',
  styleUrl: './apr-logo.component.scss'
})
export class AprLogoComponent {
@Input() isBlack = false;
}
