import { Component, HostBinding, Input, OnInit } from '@angular/core';
import{Posts} from '../post-form/posts.model'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})


export class PostsComponent implements OnInit {

  postModel: Posts
  @Input() Postfilter: Posts
  
  @HostBinding('attr.class') cssClass = 'row';
  
  

 
  constructor() {
   
   }


  voteUp(){

    this.Postfilter.voteUp();
    
  }

  voteDown(){
    this.Postfilter.voteDown();
  }



  ngOnInit(): void {

  }

}
