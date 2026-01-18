// Interaksi sederhana sesuai permintaan
document.querySelectorAll('.btn-shop').forEach(button => {
    button.addEventListener('click', () => {
        alert("Produk ditambahkan ke keranjang!");
    });
});

function scrollSlider(direction) {
    const slider = document.getElementById('slider');
    const scrollAmount = 330; // Jarak geser (lebar kartu + gap)
    
    if (direction === 1) {
        slider.scrollLeft += scrollAmount;
    } else {
        slider.scrollLeft -= scrollAmount;
    }
}

function closeModal() {
    document.getElementById('welcomeModal').style.display = 'none';
}