import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from 'src/db-data';
import { text } from 'body-parser';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  standalone:false

})
export class CourseCardComponent implements OnInit{

  @Input({
    required:true
  })
course:Course;

// @Input({
//   required:true
// })
// index:number;

// @Input({
//   required:true
// })
// count:number;

@Input({
  required:true
})
cardIndex:number;

@Output('courseSelected')
courseEmitter=new EventEmitter<Course>();



  constructor(){}
   ngOnInit(){}

   isImageVisible(){
    return this.course && this.course.iconUrl;
   }

   onCourseViewed(){
    console.log('card comp');
    this.courseEmitter.emit (this.course);
    
   }

  cardClasses(){
    // return {'beginner':this.course.category=='BEGINNER'}

    if(this.course.category=='BEGINNER'){
      return 'beginner'
    }

   }

   cardStyles(){
    return {'text-decoration':'underline'};
   }
};


