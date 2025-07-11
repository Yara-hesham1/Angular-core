import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, viewChild, viewChildren, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
    
})
export class AppComponent implements AfterViewInit{



//     data={
//      title:"Angular Core Deep Dive"
//     }

//     onLogoClicked(){
//         alert('Hello world');

//     }

//     onKeyUp(newTitle:string){
// this.data.title=newTitle;
//     }


courses=COURSES;
// coreCourse=COURSES[0];
// rjxCourse=COURSES[1];
// ngrxCourse=COURSES[2];




onCardClicked(){
    console.log("App comp");
    
}

startDate=new Date(2000,0,1);
title=COURSES[1].description;
price=9.99;
rate=0.6;


@ViewChild(CourseCardComponent)
card:CourseCardComponent

@ViewChild('cardRef1' ,{read:ElementRef})
card1:ElementRef

@ViewChild('container')
containerDiv:ElementRef

// constructor(){
//     console.log("containerDiv",this.card1);
    
// }


@ViewChildren(CourseCardComponent , {read:ElementRef})
cards:QueryList<CourseCardComponent>;


constructor(){

}

ngAfterViewInit() {
    // console.log(this.cards.first);
   this.cards.changes.subscribe(cards=>{console.log(cards)});
    
    
}

onCoursesEdited(){
    this.courses.push(
        {
        id: 1,
        description: "Angular core deep dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
    }
    );
}

// ngAfterViewInit() {
// console.log("containerDiv",this.card1);
// // this.courses[0].description='test'
// }

onCourseSelected(course:Course){
console.log(this.card);
console.log("containerDiv",this.containerDiv);


}

trackCourse(index:number,course:Course){
return course.id
}
}
