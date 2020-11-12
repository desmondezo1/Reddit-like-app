export class Posts{

   title: string;
   content: string;
   vote: number;
   img: string;

constructor( title: string, content: string, vote?: number ){

    this.title = title;
    this.content = content;
    this.vote = vote || 0;
  
}

  voteUp(){
    this.vote += 1;
  }

 voteDown(){

    
    if(this.vote === 0){
      
    }else{
      this.vote -= 1;
    }

  }


  
 }

