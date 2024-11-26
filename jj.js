// Event listener untuk form
document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const alamat = document.getElementById('alamat').value;
    const amount = document.getElementById('amount').value;zz

    // Ambil data transaksi yang sudah ada dari local storage
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    // Tambahkan transaksi baru ke dalam array
    transactions.push({ name: name, alamat: alamat, amount: amount });

    // Simpan kembali ke local storage
    localStorage.setItem('transactions', JSON.stringify(transactions));

    // Reset form
    this.reset();

    // Arahkan ke halaman simpan transaksi
    window.location.href = 'simpan transaksi.html';
});
