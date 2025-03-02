import { Component, HostBinding, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @HostBinding('class') class = 'w-full'
  title = 'knitting-app-v2-frontend-angular';
  isMenuOpen = signal(false)
  toggleMenu() {
    this.isMenuOpen.update((value) => !value)
  }
}
