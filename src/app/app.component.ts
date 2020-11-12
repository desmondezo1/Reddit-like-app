import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Posts } from "./post-form/posts.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  clicked: boolean = false
  toggle_popUpForm_btn: boolean = false
  postData: Posts[]
  @ViewChild("popupform") popupform: ElementRef;
  @ViewChild("close_icon") close_icon: ElementRef;
  @ViewChild("open_icon") open_icon: ElementRef;

  ngAfterViewInit(): void {
    

    this.closePopUpForm()
    
  }

  receivedMessage($event){
    console.log("received!")
    console.log($event)
      this.postData = $event

  }


    //function to close popup form
    closePopUpForm(){

      this.popupform.nativeElement.style.display="none";
      this.close_icon.nativeElement.style.display="none"
      this.open_icon.nativeElement.style.display="flex"
      console.log("Close! close!")

    }

    togglePopUpForm(){
      if (this.toggle_popUpForm_btn === false){
        this.popupform.nativeElement.style.display="flex";
        this.close_icon.nativeElement.style.display="flex"
        this.open_icon.nativeElement.style.display="none"
        this.toggle_popUpForm_btn = true
        
      }else{
        this.popupform.nativeElement.style.display="none";
        this.toggle_popUpForm_btn = false
        this.close_icon.nativeElement.style.display="none"
        this.open_icon.nativeElement.style.display="flex"
      }
       
      
    }


    // sorts the posts according to the heighest votes
      sortedPosts(): Posts[] {
      
          return this.postData.sort((a: Posts, b: Posts) => b.vote - a.vote);
    
        }


    //Toggles open the mobile navigation
      toggleMenu(){

      if (this.clicked === false) {
        document.getElementById("mobileMenu").style.display="flex";
            this.clicked = true
      }else{
        document.getElementById("mobileMenu").style.display="none";
        this.clicked = false
      }

}

      


//   post: Posts[];

//   constructor(){
//     this.post = [
//            new Posts ("Post 2","something nice", 5, "facebook.com"),
//            new Posts("Post 3","something amazing", 0, "facebook.com")
//     ]
//   }
  
//   addPost(title: HTMLInputElement, content: HTMLInputElement, link: HTMLInputElement): boolean {

//   console.log(`Adding article title: ${title.value} and link: ${link.value}`);
//   this.post.push(new Posts(title.value, content.value, 0, link.value));

//    title.value = '';
//    content.value = '';
//    link.value = '';
 
//    return false;
  
//  }

// sortedPosts(): Posts[] {
  
//   return this.post.sort((a: Posts, b: Posts) => b.vote - a.vote);
 
// }




}
