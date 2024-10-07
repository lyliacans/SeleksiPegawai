document.getElementById('formSeleksi').addEventListener('submit', function(event) {
    event.preventDefault();

    // Ambil nilai dari form
    const nama = document.getElementById('nama').value;
    const umur = parseInt(document.getElementById('umur').value);
    const pengalaman = parseInt(document.getElementById('pengalaman').value);
    const pendidikan = document.getElementById('pendidikan').value;
    const keterampilan = document.getElementById('keterampilan').value;

    // Seleksi berdasarkan aturan sederhana
    let hasil = 'Tidak Lolos Seleksi';
    if (umur >= 25 && pengalaman >= 2 && (pendidikan === 'S1' || pendidikan === 'S2') && keterampilan.toLowerCase().includes('programming')) {
        hasil = 'Lolos Seleksi';
    }

    // Tambahkan hasil ke dalam tabel
    const tabelHasil = document.getElementById('tabelHasil');
    const row = tabelHasil.insertRow();
    row.insertCell(0).innerText = nama;
    row.insertCell(1).innerText = umur;
    row.insertCell(2).innerText = pengalaman;
    row.insertCell(3).innerText = pendidikan;
    row.insertCell(4).innerText = keterampilan;
    row.insertCell(5).innerText = hasil;

    // Kosongkan form setelah submit
    document.getElementById('formSeleksi').reset();
});
