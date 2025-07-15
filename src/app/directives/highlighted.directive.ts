import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, output } from '@angular/core';

@Directive({
  selector: '[highlighted]',
  standalone:false,
  exportAs:'hl'

})
export class HighlightedDirective {

  @Input('highlighted')
  isHighlighted=false

@Output()
toggleHighlight=new EventEmitter();


toggle() {
    this.isHighlighted = !this.isHighlighted;
  }

  constructor() {

    console.log("Directive created..");
    
   }

   @HostBinding('attr.disabled')
    get disabled(){
      return true
    }



   @HostBinding('class.highlighted')
    get cssClasses(){
      return this.isHighlighted
    }


    @HostListener('mouseover',['$event'])
      mouseOver($event){
        console.log($event);
        
        this.isHighlighted=true
        this.toggleHighlight.emit()
      }
    

      @HostListener('mouseleave')
      mouseLeave(){
        this.isHighlighted=false
      }
  

  // @HostBinding('style.border')
  //   get cssClasses(){
  //     return "1px solid red"
  //   }
}
