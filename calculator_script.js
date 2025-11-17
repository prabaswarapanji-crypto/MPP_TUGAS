function getNumbers() {

    const input1 = document.getElementById('angka1').value;
    const input2 = document.getElementById('angka2').value;

    let num1 = Number(input1);
    let num2 = Number(input2);

    const reultElement = document.getElementById('hasilKalkulasi');

    if (isNaN(num1) || isNaN(num2) || input1.trim() === "" || input2.trim() === "") {
        reultElement.textContent = 'Error: Masukkan angka yang valid di kedua kolom.';
        return null;
    }

    return {num1, num2, reultElement};
}

function tambah() {
    const data = getNumbers();
    if (!data) return;

    const hasil = data.num1 + data.num2;
    data.reultElement.textContent = `Hasil: ${hasil}`;
}

function kurang() {
    const data = getNumbers();
    if (!data) return;

    const hasil = data.num1 - data.num2;
    data.reultElement.textContent = `Hasil: ${hasil}`;
}

function kali() {
    const data = getNumbers();
    if (!data) return;

    const hasil = data.num1 * data.num2;
    data.reultElement.textContent = `Hasil: ${hasil}`;
}

function bagi() {
    const data = getNumbers();
    if (!data) return;

    if (data.num2 === 0) {
        data.reultElement.textContent = 'Error: Pembagian oleh nol tidak diizinkan.';
        return;
}

    const hasil = data.num1 / data.num2;
    data.reultElement.textContent = `Hasil: ${hasil}`;
}
