import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-nav-bar',
  templateUrl: './content-nav-bar.component.html',
  styleUrls: ['./content-nav-bar.component.css'],
})
export class ContentNavBarComponent implements OnInit {
  menuItems = [
    { linkId: 1, linkName: 'Summary', linkUrl: '/' },
    { linkId: 2, linkName: 'Development', linkUrl: '/development' },
    { linkId: 3, linkName: 'Marketing', linkUrl: '/marketing' },
    { linkId: 4, linkName: 'Blog', linkUrl: '/blog' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
