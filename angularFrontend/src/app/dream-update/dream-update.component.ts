import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Dream } from '../dream.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DreamService } from '../dream-service.service';

@Component({
  selector: 'app-dream-update',
  templateUrl: './dream-update.component.html',
  styleUrls: ['./dream-update.component.css']
})
export class DreamUpdateComponent implements OnInit {

  dream: Dream;
  dreamSubscription: Subscription;
  dreamId: number;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private dreamService: DreamService,
    private router: Router
  ) { this.dream = new Dream()}

  ngOnInit(): void { 
    // Get dreamId
    this.dreamSubscription = this.activatedRoute.params.subscribe(params => {
      this.dreamId = params['id'];
    })
  }

  onUpdate = (updateDreamForm: NgForm) => {
    this.dreamService.updateDream(this.dreamId, this.dream).subscribe(result => {
      this.router.navigate(['/dream-list']);
    }, error => {
      console.log(error);
    })
  }

  onDelete = () => {
    this.dreamService.deleteDream(this.dreamId).subscribe(result => {
      this.router.navigate(['/dream-list']);
    },error => {
      console.log(error);
    });
  }

}
