function decryptBase64() {
    // Base64 encoded string (example)
    const base64Text = "KzMzIDYgMDIgNjMgMTQgNjcK";

    // Decode the base64 string
    const decodedText = atob(base64Text);

    // Alert the decoded text
    alert(decodedText);
}
window.addEventListener('load', () => {
    // Get HTML elements
    var my_button = document.getElementById("phone_no")

    my_button.onclick = decryptBase64

}, false);