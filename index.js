function imgEditClick(imgEditId, imgUneditId) {
    document.getElementById(imgEditId).classList.add('image-hidden');
    document.getElementById(imgUneditId).classList.remove('image-hidden');

}

function imgUneditClick(imgUneditId, imgEditId) {
    document.getElementById(imgEditId).classList.remove('image-hidden');
    document.getElementById(imgUneditId).classList.add('image-hidden');

}
