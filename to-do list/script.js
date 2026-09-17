function addTask() {

    // Mengambil isi input
    let input = document.getElementById("taskInput");

    // Mengambil teks yang ditulis
    let task = input.value;

    // Jika input kosong
    if (task === "") {
        alert("Tulis tugas terlebih dahulu!");
        return;
    }

    // Membuat elemen <li>
    let li = document.createElement("li");

    // Memasukkan teks tugas
    li.innerHTML = `
        <span>${task}</span>
        <button class="delete" onclick="deleteTask(this)">
            Hapus
        </button>
    `;

    // Memasukkan tugas ke daftar
    document.getElementById("taskList").appendChild(li);

    // Mengosongkan input
    input.value = "";
}


function deleteTask(button) {

    // Menghapus tugas
    button.parentElement.remove();

}