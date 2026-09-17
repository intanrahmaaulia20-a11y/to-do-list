// Menampilkan tugas yang sudah tersimpan
window.onload = function () {
    loadTasks();
};


// Fungsi menambahkan tugas
function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Tulis tugas terlebih dahulu!");
        return;
    }

    // Ambil tugas yang sudah ada
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Tambahkan tugas baru
    tasks.push(task);

    // Simpan ke browser
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Kosongkan input
    input.value = "";

    // Tampilkan ulang tugas
    loadTasks();
}


// Fungsi menampilkan tugas
function loadTasks() {

    let taskList = document.getElementById("taskList");

    // Bersihkan daftar
    taskList.innerHTML = "";

    // Ambil data dari browser
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    tasks.forEach(function (task, index) {

        let li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button class="delete" onclick="deleteTask(${index})">
                Hapus
            </button>
        `;

        taskList.appendChild(li);
    });
}


// Fungsi menghapus tugas
function deleteTask(index) {

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Hapus tugas
    tasks.splice(index, 1);

    // Simpan perubahan
    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Tampilkan ulang
    loadTasks();
}