import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>(); // Phát sự kiện khi nhấn menu

  onMenuClick() {
    this.toggleSidebar.emit(); // Phát sự kiện khi nhấn menu
  }
}
