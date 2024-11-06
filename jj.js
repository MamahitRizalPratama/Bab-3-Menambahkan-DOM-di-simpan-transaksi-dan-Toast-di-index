function openModal(productName, productPrice, productDescription) {
    document.getElementById('productTitle').innerText = productName;
    document.getElementById('productPrice').innerText = productPrice;

    // Simpan keterangan barang sementara di localStorage
    localStorage.setItem('selectedProductDescription', productDescription);
    
    document.getElementById('myModal').style.display = "block";
}

document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const alamat = document.getElementById('alamat').value;
    const amount = document.getElementById('amount').value;
    const productDescription = localStorage.getItem('selectedProductDescription'); // Ambil keterangan barang dari localStorage

    // Ambil transaksi yang sudah ada atau buat array kosong
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

    // Tambahkan transaksi baru dengan keterangan barang
    transactions.push({ name: name, alamat: alamat, amount: amount, product: productDescription });

    // Simpan kembali ke localStorage
    localStorage.setItem('transactions', JSON.stringify(transactions));

    // Hapus keterangan barang sementara setelah menyimpan
    localStorage.removeItem('selectedProductDescription');

    // Reset form
    this.reset();

    // Arahkan ke halaman transaksi
    window.location.href = 'simpan transaksi.html';
});
function renderTransactions() {
    const transactionList = document.getElementById('transactionList');
    transactionList.innerHTML = '';

    transactions.forEach((transaction, index) => {
        const row = document.createElement('tr');

        // Tampilkan data dengan nilai `transaction.product` jika ada
        row.innerHTML = `
            <td>${transaction.name}</td>
            <td>${transaction.alamat}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.product || 'Tidak ada keterangan'}</td> <!-- Tampilkan keterangan barang atau pesan jika kosong -->
            <td>
                <button onclick="editTransaction(${index})">Edit</button>
                <button onclick="deleteTransaction(${index})">Hapus</button>
            </td>
        `;

        transactionList.appendChild(row);
    });
}

