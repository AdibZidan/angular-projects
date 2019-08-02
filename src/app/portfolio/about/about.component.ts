import { Component, OnInit, HostListener } from '@angular/core';

import { frontEnd, backEnd, other } from './language/technology-stack';

import { languages } from './language/language';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  public showArrow: boolean = false;

  public languages = languages;
  public frontEndStacks = frontEnd
  public backEndStack = backEnd;
  public otherStacks = other;

  constructor(private titleService: Title) { }

  ngOnInit(): void { this.changeTitle(); }

  public onClick(): void {
    this.showArrow = false;
    this.scrollUp();
  }

  public get age(): number {
    const currentYear: number = new Date().getFullYear(),
      bornYear: number = new Date('January 1, 1995').getFullYear(), currentAge = currentYear - bornYear;

    return currentAge;
  }

  @HostListener('window:scroll', [])
  public onScroll(): void { this.isUserOnBottom(); }

  private scrollUp(): void { window.scroll({ top: 0, left: 0, behavior: 'smooth' }); }

  private isUserOnBottom(): void { this.onBottom(); }

  private onBottom(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.showArrow = true;
    }
  }

  private changeTitle(): void { this.titleService.setTitle('About Me'); }

}
