const form = document.getElementById("taskForm");
const list = document.getElementById("list");
const clearBtn = document.getElementById("clearBtn");

let tasks = [];

loadTasks();
showTasks();

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const date = document.getElementById("date").value;
    const text = document.getElementById("text").value.trim();

    const task = {
        id: Date.now(),
        name: name,
        subject: subject,
        date: date,
        text: text,
        done: false
    };

    tasks.push(task);
    saveTasks();
    showTasks();
    form.reset();
});

clearBtn.addEventListener("click", function () {
    form.reset();
});

function showTasks() {
    list.innerHTML = "";

    if (tasks.length === 0) {
        list.innerHTML = '<div class="empty">Vēl nav neviena uzdevuma.</div>';
        return;
    }

    tasks.forEach(function (task) {
        const card = document.createElement("div");
        card.className = task.done ? "task done" : "task";

        let lateText = "";
        if (isLate(task)) {
            lateText = '<span class="tag late">Nokavēts</span>';
        }

        let doneText = "";
        if (task.done) {
            doneText = '<span class="tag">Izpildīts</span>';
        }

        let doneButton = "";
        if (!task.done) {
            doneButton = '<button class="done-btn" data-id="' + task.id + '">Izpildīts</button>';
        }

        card.innerHTML =
            "<h3>" + task.name + "</h3>" +
            '<div class="info">' +
            '<span class="tag">' + task.subject + "</span>" +
            '<span class="tag">' + task.date + "</span>" +
            doneText +
            lateText +
            "</div>" +
            "<p>" + (task.text || "Nav apraksta") + "</p>" +
            '<div class="buttons">' +
            doneButton +
            '<button class="delete-btn" data-delete="' + task.id + '">Dzēst</button>' +
            "</div>";

        list.appendChild(card);
    });

    const doneButtons = document.querySelectorAll(".done-btn");
    const deleteButtons = document.querySelectorAll(".delete-btn");

    doneButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const id = Number(button.dataset.id);
            markDone(id);
        });
    });

    deleteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const id = Number(button.dataset.delete);
            deleteTask(id);
        });
    });
}

function markDone(id) {
    tasks = tasks.map(function (task) {
        if (task.id === id) {
            task.done = true;
        }
        return task;
    });

    saveTasks();
    showTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(function (task) {
        return task.id !== id;
    });

    saveTasks();
    showTasks();
}

function isLate(task) {
    if (task.done || !task.date) {
        return false;
    }

    const today = new Date();
    const now = today.toISOString().split("T")[0];
    return task.date < now;
}

function saveTasks() {
    localStorage.setItem("schoolTasks", JSON.stringify(tasks));
}

function loadTasks() {
    const data = localStorage.getItem("schoolTasks");

    if (data) {
        tasks = JSON.parse(data);
    }
}
