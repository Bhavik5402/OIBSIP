console.log("this is first js project")
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {
  let addTxt = document.getElementById("addTxt");
  let addTitle = document.getElementById("addTitle");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
    notesObj.push([addTxt.value,addTitle.value]);
    localStorage.setItem("notes", JSON.stringify(notesObj));
  }
   else {
    notesObj = JSON.parse(notes);
    notesObj.push([addTxt.value,addTitle.value]);
    localStorage.setItem("notes", JSON.stringify(notesObj));
  }
  addTxt.value = "";
  addTitle.value = "";
  console.log(notesObj);
  showNotes();
});

function showNotes(){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
      } else {
        notesObj = JSON.parse(notes);
      }
    let html='';
    notesObj.forEach(function(element,index) {
        html+=`<tr class='table-content'>
                        
        <td>${element[1]}</td>
        <td>${element[0]}</td> 
        <td><button id="${index}" onclick="deleteNote(this.id)" class="btn-remove">X</button></td>
      </tr>
      `
    });
    let notesElm= document.getElementById('notes');
    if(notesObj.length !=0){
    notesElm.innerHTML=html
    }
    else{
        notesElm.innerHTML=`<td colspan="3" style="text-align: center;">NOTHING ADDED</td>`
    }
}

function deleteNote(index){
    console.log("deleting "+ index);
    let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index,1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();

}

