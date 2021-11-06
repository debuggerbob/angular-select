import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  // get the route
  currentRoute: string = this.router.url.split('/')[1]

  // all the data that we thought to store in global state should be placed here
  firstRouteItems = [
    { id: 1, item: "first route item 1" },
    { id: 1, item: "first route item 2" },
    { id: 1, item: "first route item 3" },
  ]
  secondRouteItems = [
    { id: 1, item: "second route item 1" },
    { id: 1, item: "second route item 2" },
    { id: 1, item: "second route item 3" },
  ]

  // default stuff
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}