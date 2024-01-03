import { Component } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
    navigateToLink(link: string): void {
        // Open link in a new tab/window
        window.open(link, '_blank');
    }

}
