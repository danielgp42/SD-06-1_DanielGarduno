// Type your code below this line!

function Mail(subj, msg, printMail) {
    this.subject = subj
    this.message = msg
    this.printMail=function(){
      console.log(this.subject+ ":"+this.message);
      
    }
  }
  
  const newMail = new Mail(process.argv[2],process.argv[3] )
  console.log(newMail.subject + ": " + newMail.message)
  // Type your code above this line!
  
  newMail.printMail()