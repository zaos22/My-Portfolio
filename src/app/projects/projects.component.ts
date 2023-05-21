import { AfterViewInit, OnChanges, OnDestroy, Component, SimpleChanges } from '@angular/core';

import * as React from 'react';

import * as ReactDOM from 'react-dom';

import Home from '../projects/projects';

@Component({
  selector: 'app-projects',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnChanges, AfterViewInit, OnDestroy{
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
