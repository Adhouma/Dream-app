import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dream } from '../dream.model';
import { DreamService } from '../dream-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dream-add',
  templateUrl: './dream-add.component.html',
  styleUrls: ['./dream-add.component.css']
})
export class DreamAddComponent implements OnInit {

  dream: Dream;

  constructor(private dreamService: DreamService, private router: Router) { 
    this.dream = new Dream();
  }

  ngOnInit(): void { }

  onSubmit = (addDreamForm: NgForm) => {
    // console.log(addDreamForm.value)
    this.dreamService.saveDream(this.dream).subscribe(result => {
      this.router.navigate(['/dream-list'])
    })
  }
}
