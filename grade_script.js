function cekNilai() {
    let nilaiInput = document.getElementById("nilaiSiswa").value;
    let nilai = Number(nilaiInput);
    
    let hasilElement = document.getElementById("hasilGrade");
    
    let hasilGrade;
    let gradeClass;
    
    if (nilaiInput === "" || isNaN(nilai) || nilai < 0 || nilai > 100) {
        hasilGrade = "Nilai tidak valid. Masukkan angka antara 0-100.";
        gradeClass = "grade-invalid";
    } else if (nilai >= 90 && nilai <= 100) {
        hasilGrade = "A (Sangat Baik)";
        gradeClass = "grade-a";
    } else if (nilai >= 80 && nilai <= 89) {
        hasilGrade = "B (Baik)";
        gradeClass = "grade-b";
    } else if (nilai >= 70 && nilai <= 79) {
        hasilGrade = "C (Cukup)";
        gradeClass = "grade-c";
    } else if (nilai >= 60 && nilai <= 69) {
        hasilGrade = "D (Kurang)";
        gradeClass = "grade-d";
    } else if (nilai >= 0 && nilai <= 59) {
        hasilGrade = "E (Gagal)";
        gradeClass = "grade-e";
    }
    
    hasilElement.innerHTML = "Nilai Anda: " + nilai + " - Grade: " + hasilGrade;
    
    hasilElement.className = gradeClass;
    
    console.log("Nilai input:", nilaiInput);
    console.log("Nilai setelah konversi:", nilai);
    console.log("Grade:", hasilGrade);
}

document.addEventListener('DOMContentLoaded', function() {
    const inputElement = document.getElementById("nilaiSiswa");
    
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            cekNilai();
        }
    });
});