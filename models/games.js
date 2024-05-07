const { getAllCards } = require('../controllers/controllers');
const { addCards } = require('../views');

const submitForm = () => {
    console.log("Form submitted");
    let formData = {
        title: $('#title').val(),
        movie: $('#game').val(), 
        path: $('#link').val(),   
        description: $('#description').val()
    };
   
    console.log(formData);
}

$(document).ready(function () {
    const modalInstance = M.Modal.init(document.getElementById('modal1'));
  
    const openModal = () => {
        modalInstance.open();
    }
  
    $('#clickMeButton').click(openModal);
  
    $('#formSubmit').click(() => {
        submitForm();
    });
  
    getAllCards();
  });  