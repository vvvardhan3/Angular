import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  username = ' ';
  serverCreated = false;
  showSecret = false;

  onCreateServer() {
    this.serverCreated = true;
  }
}