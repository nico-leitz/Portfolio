import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";
import {TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-skills-section',
  imports: [RouterLink, TranslatePipe],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
})
export class SkillsSection {}
