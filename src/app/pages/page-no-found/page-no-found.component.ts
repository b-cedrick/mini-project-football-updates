import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-no-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './page-no-found.component.html',
  styleUrls: ['./page-no-found.component.scss'],
})
export class PageNoFoundComponent {}
