let myName = "Panji Prabaswara";
const myAge = 17;

console.log("Nama saya:", myName);
console.log("Umur saya:", myAge);

document.getElementById("nama-saya").innerHTML = "Halo, Saya " + myName;

document.getElementById("info-diri").innerHTML = "Saya berusia " + myAge + " tahun dan Saya adalah seorang web developer yang passionate dalam menciptakan pengalaman digital yang menarik dan fungsional. Dengan keahlian dalam HTML, CSS, JavaScript, dan berbagai framework modern, saya siap membantu mewujudkan ide-ide kreatif Anda menjadi kenyataan digital.";

function showAlert() {
    alert("Anda telah mengklik tombol!");
}