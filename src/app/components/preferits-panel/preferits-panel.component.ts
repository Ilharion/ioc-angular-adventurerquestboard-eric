import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PreferitsService } from '../../services/preferits.service';

@Component({
  selector: 'app-preferits-panel',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './preferits-panel.component.html'
})
export class PreferitsPanelComponent {

  constructor(public preferitsService: PreferitsService) {}

  trackById(_: number, item: any) {
    return item.id;
  }
}