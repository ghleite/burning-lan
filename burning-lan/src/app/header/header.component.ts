import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @ViewChild('menuButton')
  menuButton!: ElementRef;

  isMenuVisible = false;

  constructor() {}

  ngOnInit(): void {}

  toggleMenu(): void {
    this.isMenuVisible = !this.isMenuVisible;
    if (!this.isMenuVisible) {
      this.menuButton.nativeElement.classList.remove('active');
    }
  }
}
