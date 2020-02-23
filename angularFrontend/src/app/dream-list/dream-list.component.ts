import { Component, OnInit, ElementRef, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { DreamService } from '../dream-service.service';
import { Dream } from '../dream.model';

@Component({
  selector: 'app-dream-list',
  templateUrl: './dream-list.component.html',
  styleUrls: ['./dream-list.component.css']
})
export class DreamListComponent implements OnInit {

  dreams: Dream[];

  constructor(private dreamService: DreamService) { }

  ngOnInit(): void {
    this.dreamService.getAllDreams().subscribe(data => {  
      this.dreams = data;
    })
  }
}
  