import { AfterContentInit, AfterViewInit, Component, ContentChild,  ContentChildren,  ElementRef,  EventEmitter, input, Input, OnInit, Output, output, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { Course } from '../model/course';
import { COURSES } from 'src/db-data';
import { text } from 'body-parser';
import { CourseImageComponent } from '../course-image/course-image.component';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  standalone:false,
  encapsulation:ViewEncapsulation.ShadowDom

})
export class CourseCardComponent implements OnInit,AfterViewInit,AfterContentInit{

  @Input({
    required:true
  })
course:Course;

@Input()
noImageTpl:TemplateRef<any>;

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

// @ContentChild('courseImage')
// image;

// @ContentChild(CourseImageComponent,{read:ElementRef})
// image:ElementRef;


@ContentChildren(CourseImageComponent,{read:ElementRef})
images:QueryList<ElementRef>;


  constructor(){}
  ngAfterViewInit(){
  }
  
  ngAfterContentInit(){

    console.log(this.images);
    
  }



  // ngAfterViewInit(){
  //   console.log(this.image);
    
  // }
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


