const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.querySelector(".qr-body");

let size = sizes.value;
generateBtn.addEventListener("click", (event) => {
    event.preventDefault();
    isEmptyInput();

});

//to check Input ids empty or not
function isEmptyInput() {
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate QR code");
}
function generateQRCode() {
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text: qrText.value,
        height: size,
        width: size,
        colorLight: "#fff",
        colorDark: "#000",
    });
}

sizes.addEventListener("change", (event) => {
    size = event.target.value;
    isEmptyInput();
});


downloadBtn.addEventListener("click", () => {
    let img = document.querySelector(".qr-body img");
    if (img !== null) {
        let imgAtrr = img.getAttribute("src");
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else {
        downloadBtn.setAttribute("href", `${document.querySelector("canvas").toDataURL()}`);
    }

});

