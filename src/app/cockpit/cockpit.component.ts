import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output('svCreated') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>()
  @Output('bpCreated') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>()

  // serverElements: any[] = [];
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('newServerContentInputHTML') serverContentInputTS: ElementRef

  onAddServer(input: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: input.value,
      serverContent: this.serverContentInputTS.nativeElement.value
    })
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprint(input: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: input.value,
      serverContent: this.serverContentInputTS.nativeElement.value
    })
    //   this.serverElements.push({
    //     type: 'blueprint',
    //     name: this.newServerName,
    //     content: this.newServerContent
    //   });
    // }

  }
}
