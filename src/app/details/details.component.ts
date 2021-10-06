import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public myId:any;
  constructor(private activateRout:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    let id=this.activateRout.snapshot.paramMap.get('id');
   this.myId=id;
    
  }

}
