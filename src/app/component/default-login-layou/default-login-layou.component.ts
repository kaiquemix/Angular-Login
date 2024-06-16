import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-default-login-layou',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layou.component.html',
  styleUrl: './default-login-layou.component.scss',
})
export class DefaultLoginLayouComponent {
  @Input() title: string = '';
  @Input() primaryBtnText: string = '';
  @Input() secondaryBtnText: string = '';
  @Input() disablePrimaryBtn: boolean = true;

  //submit para enviar dados de login.
  @Output('submit') onSubmit = new EventEmitter();
  submit() {
    this.onSubmit.emit();
  }
  //navegar para a página de cadastro
  @Output('navigate') onNavigate = new EventEmitter();
  navigate() {
    this.onNavigate.emit();
  }
}
