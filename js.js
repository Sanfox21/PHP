let animacion = document.getElementById('modal');

function abrirV() {
    const model1 = document.querySelector("#modal");
    
    model1.showModal();
    
}

function cerrarV() {
    const model1 = document.querySelector("#modal");

    model1.close();
    
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
