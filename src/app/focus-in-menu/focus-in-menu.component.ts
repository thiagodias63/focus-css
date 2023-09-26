import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-focus-in-menu',
  templateUrl: './focus-in-menu.component.html',
  styleUrls: ['./focus-in-menu.component.css']
})
export class FocusInMenuComponent {

  @ViewChild('menuToggle') menuToggle: ElementRef;
  @ViewChild('primaryNavigation') siteNavigation: ElementRef;
  isOpened = false;

  onClickOnMenu(): void {
    const isOpened = this.menuToggle.nativeElement.getAttribute('aria-expanded') === "true";
    isOpened ? this.closeMenu() : this.openMenu();
  }

  openMenu(): void {
    this.menuToggle.nativeElement.setAttribute('aria-expanded', "true");
    this.siteNavigation.nativeElement.setAttribute('data-state', "opened");
  }

  closeMenu(): void {
    this.menuToggle.nativeElement.setAttribute('aria-expanded', "false");
    this.siteNavigation.nativeElement.setAttribute('data-state', "closing");

    this.siteNavigation.nativeElement.addEventListener('animationend', () => {
      this.siteNavigation.nativeElement.setAttribute('data-state', "closed");
    }, { once: true })
  }
}
