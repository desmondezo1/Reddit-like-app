import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Posts } from "./posts.model";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Posts[];

  @Output() messageEvent = new EventEmitter<Posts[]>();



  constructor(){  

    this.post = [
           new Posts ("Post 2","something nice", 5 ),
           new Posts("Post 3","something amazing", 0)
    ]
    
    
  }




   
       


  addPost(title: HTMLInputElement, content: HTMLInputElement): boolean {

    console.log(`Adding article title: ${title.value} `);
    this.post.push(new Posts(title.value, content.value, 0));

    title.value = '';
    content.value = '';
  
        
    console.log("emitted!")
     
 
   return false;
  
 }

      

      // sortedPosts(): Posts[] {
        
      //   return this.post.sort((a: Posts, b: Posts) => b.vote - a.vote);
      
      // }



  // @HostBinding('attr.class') cssClass = 'row';
  // @Input() post: Posts

  // constructor() { }



  //  voteUp(){
  //   this.post.voteUp();
  // }

  // voteDown(){
  //   this.post.voteDown();
  // }


  ngOnInit(): void {
    this.messageEvent.emit(this.post)
  }

}
