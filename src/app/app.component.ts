import { Component } from '@angular/core';
import {COURSES} from '../db-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

    data={
     title:"Angular Core Deep Dive"
    }

    onLogoClicked(){
        alert('Hello world');

    }

    onKeyUp(newTitle:string){
this.data.title=newTitle;
    }

}
