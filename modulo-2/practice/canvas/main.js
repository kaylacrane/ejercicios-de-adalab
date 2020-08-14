'use strict';
const btnDownload = document.querySelector('.btnDownload');
const displayBlock = document.querySelector('.displayBlock');

function doCapture() {
  html2canvas(document.querySelector('.block')).then(function (imageFile) {
    const fileName = imageFile
      .toDataURL('image/jpeg', 0.9)
      .replace('image/jpeg', 'image/octet-stream');
    fileName.download;
    console.log(fileName);
    btnDownload.setAttribute('href', `${fileName}`);
  });
}

btnDownload.addEventListener('click', doCapture);

function downloadImage(data, filename = 'untitled.jpeg') {
  var a = document.createElement('a');
  a.href = data;
  a.download = filename;
  document.body.appendChild(a);
}

/* study html2canvas more */
