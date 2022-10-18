import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked, OnDestroy {

  password = "7E7FB890C3690CF202363A92B253FCBD0538";

  @Input() myvalue:String = "";


  constructor() {
    console.log("Contructor called");
   }

  ngOnDestroy(): void {
    console.log("Destroyed component");
  }

  ngAfterContentChecked(): void {
    console.log("After Content Checked");
  }

  ngAfterContentInit(): void {
    console.log("After content init called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Called");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  // ngDoCheck(): void {
  //   console.log("Docheck called");
  // }
}
