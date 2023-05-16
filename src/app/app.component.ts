import { AfterViewInit, OnChanges, OnDestroy, Component, SimpleChanges } from '@angular/core';

import * as React from 'react';

import * as ReactDOM from 'react-dom';

import Home from './Home';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, AfterViewInit, OnDestroy{
  title = 'portfolio-react-angular';

  public rootId = 'rootId';

  ngOnChanges(changes: SimpleChanges){
    this.render();
  }

  ngAfterViewInit(){
    this.render();
  }

  ngOnDestroy(){

  }

  private render() {
    ReactDOM.render(React.createElement(Home), document.getElementById(this.rootId));
  }
}
