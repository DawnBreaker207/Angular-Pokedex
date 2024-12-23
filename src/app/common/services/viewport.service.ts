import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewportService {
  constructor() {}
  lockScroll() {
    if (document) {
      const scrollDiv = document.createElement('div');
      scrollDiv.className = 'scrollbar-measure';
      document.body.appendChild(scrollDiv);
      const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingLeft = `${scrollbarWidth}px`;
    }
  }
  unlockScroll() {
    if (document) {
      document.body.style.overflow = 'initial';
      document.body.style.paddingLeft;
    }
  }
}
