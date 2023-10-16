const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn')
let notes = document.querySelectorAll('.input-box')

// now writing the code to save that notes permanently if we close the tab 

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes")
}
showNotes();


function updateStorage(){
 localStorage.setItem("notes", notesContainer.innerHTML)    
}
  
//  This code is for clicking the button tag then we can get the notes writing box on the screen
createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p") // creating p tag
    let img = document.createElement("img") // creating image tag
    inputBox.className = "input-box"  // giving the class name to p tag
    inputBox.setAttribute("contenteditable", "true") // we set contenteditable true then we can edit the content what we write 
    img.src = "Images/1345874.png" // we set the image in img tag by this
    notesContainer.appendChild(inputBox).appendChild(img) // we show on the screen by which we want to click and show the box on screen
})

// this code is for deleting the notes box 
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){ // we will target the img tag in delete img which we created earlier , tagName will always in caps
        e.target.parentElement.remove() // then by parentElement tag we remove the whole box here
        updateStorage(); // this will updating the storage what will remain after deleting the notes
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box")
        notes.forEach(notes =>{
            notes.onkeyup = function(){
                updateStorage() // not properly understand this last code
            }
        })
    }


})

document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak")
        event.preventDefault();
    }
})


// steps
// 1. we create a p tag and img tag
// 2. then we show that on screen by clicking on button create notes
//3. than we create functionaloity for deleting the notes on delete button
// 4. then we create functions for showing the notes after refreshing byb localstorage 
// 5. then we write code for enter key to get new line by insertLineBreak
// 6. foreach and onkeyup not understand.

