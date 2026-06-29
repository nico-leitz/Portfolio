import { Component } from '@angular/core';
import {TranslatePipe, TranslateDirective} from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  imports: [TranslatePipe, TranslateDirective],
  templateUrl: './about-me.html',
  styleUrl: './about-me.scss',
})
export class AboutMe {}