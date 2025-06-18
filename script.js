// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
    return;
  }

  if (name.trim() === "") {
    alert('Name cannot be empty.');
    e.preventDefault();
    return;
  }

  e.preventDefault(); // Prevent actual form submission
  alert('Form saved successfully.');
  document.getElementById('contactForm').reset();
});

// To-Do List Logic
function addTodo() {
  const input = document.getElementById('todoInput');
  const task = input.value.trim();
  if (task === '') {
    alert('Please enter a task!');
    return;
  }

  const li = document.createElement('li');
  li.textContent = task;

  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  document.getElementById('todoList').appendChild(li);
  input.value = '';
}
