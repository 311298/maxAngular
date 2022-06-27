import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  constructor() {
    console.log('constructor called!!')
  }

  ngOnInit(): void {
    console.log('ngoninit called !!')
    console.log('text content', this.header.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngonchanges called!!')
    console.log('simplechanges called!!')
    console.log(changes)
  }

  ngDoCheck(): void {
    console.log('ngdocheck called!!')
  }

  ngAfterContentInit(): void {
    console.log('ngaftercontentinit called!!')
  }

  ngAfterContentChecked(): void {
    console.log('ngaftercontentchecked called!!')
  }

  ngAfterViewChecked(): void {
    console.log('ngafterviewchecked called!!')
  }

  ngAfterViewInit(): void {
    console.log('ngafterviewinit called!!')
    console.log('using in ngafterviewinit', this.header.nativeElement.textContent)
  }

  ngOnDestroy(): void {
    console.log('ngondestroy called!!')
  }

  @Input('srvElement') element: { type: string, name: string, content: string }
  @ViewChild('heading', { static: true }) header: ElementRef

}
