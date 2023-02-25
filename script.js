var submit = document.getElementById('submit')
var about = document.getElementById('about')
var inputName = document.getElementById('name')
var inputEmail = document.getElementById('email')


function Submit(){

    let name = inputName.value
    let email = inputEmail.value

    if(name==""||email==""){
      if(name==""){
        document.getElementById('msg-name').style.visibility = 'visible'
     }
     if(email==""){
       document.getElementById('msg-email').style.visibility = 'visible'
     }

     OpenModal('dialog-erro')
    } else{
      document.getElementById('msg-name').style.visibility = 'hidden'
      document.getElementById('msg-email').style.visibility = 'hidden'
          OpenModal('dialog')
    }

    

}

function OpenModal(modalNome){
  let dialog = document.getElementById(modalNome)
  dialog.showModal()
}

function  CloseModal(modalNome){
  let dialog = document.getElementById(modalNome)
  dialog.close()
}