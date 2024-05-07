const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = `<div class="col-md-4">
            <div class="card" style="width: 18rem;">
                <img src="${item.path}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                    <button type="button" class="btn btn-outline-primary">Click Me</button>
                </div>
            </div>
        </div>`;
        $("#card-section").append(itemToAppend);
    });
  };

  $(document).ready(function () {
    const modalInstance = M.Modal.init(document.getElementById('modal1'));
  
    const openModal = () => {
        modalInstance.open();
    }
  });  