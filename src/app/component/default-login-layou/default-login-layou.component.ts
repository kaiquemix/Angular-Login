import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-default-login-layou',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layou.component.html',
  styleUrl: './default-login-layou.component.scss'
})
export class DefaultLoginLayouComponent {
  @Input() title: string = "";
  @Input() primaryBtnText: string = "";
  @Input() secondaryBtnText: string = "";
}
