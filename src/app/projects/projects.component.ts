import { Component } from '@angular/core';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  redirectToGithub(event: Event,githubUrl: string): void {
    // Open GitHub link in a new tab/window
    window.open(githubUrl, '_blank');
    event.stopPropagation();
  }

}
