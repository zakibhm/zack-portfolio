import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.css']
})
export class FlipCardComponent implements OnInit {
  toggleProperty = false;
  // @Input('githubUrl') githubUrl: string='';

  constructor() { }

  ngOnInit() {
  }

  toggle(event: Event) {
    this.toggleProperty = !this.toggleProperty;
    event.stopPropagation();
  }
  redirectToGithub(event: Event): void {
    // Open GitHub link in a new tab/window
    window.open('https://github.com/zakibhm/INF1015_PROJECT/', '_blank');
    event.stopPropagation();
  }


}
