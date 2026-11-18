// script.js: shared by every page.
// Each feature first checks that its elements are on the current page,
// so the same file can be loaded everywhere.
//
// Security rules from the project guidelines:
// - Put user-typed text on the page with textContent, never innerHTML.
// - Validate everything the user enters, in JavaScript as well as HTML.

// ---------- Feature 1: show/hide sections (Welcome and Background pages) ----------

// Every button with an aria-controls attribute opens and closes
// the element whose id it names.
const toggleButtons = document.querySelectorAll('button[aria-controls]');

toggleButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const isOpen = button.getAttribute('aria-expanded') === 'true';

    // Flip the state: open becomes closed, closed becomes open
    button.setAttribute('aria-expanded', String(!isOpen));
    panel.hidden = isOpen;
  });
});

// ---------- Quiz page ----------

const form = document.getElementById('checkup-form');

if (form) {
  const progressText = document.getElementById('progress-text');

  // The name="" of each of the six scored questions in quiz.html
  const questionNames = ['passwords', 'two-factor', 'updates', 'screen-lock', 'social', 'backup'];

  // ---------- Feature 2: progress counter ----------

  const updateProgress = function () {
    let answered = 0;

    questionNames.forEach(function (name) {
      // form.elements[name] is either a group of radio buttons or a dropdown.
      // Its value stays '' until the user picks an answer.
      const field = form.elements[name];
      if (field && field.value !== '') {
        answered = answered + 1;
      }
    });

    progressText.textContent = answered + ' of ' + questionNames.length + ' questions answered';
  };

  // Every radio button and dropdown updates the counter when it changes
  form.querySelectorAll('input[type="radio"], select').forEach(function (field) {
    field.addEventListener('change', updateProgress);
  });

  // Count once on load, in case the browser kept answers from a previous visit
  updateProgress();

  // ---------- Feature 3: check the answers, then show a score and tips ----------

  form.addEventListener('submit', function (event) {
    // The site has no server, so always stop the normal submit.
    // This also keeps answers out of the address bar.
    event.preventDefault();

    const errors = [];

    // TODO: read the name, the six answers and the checked worries
    // TODO: check at least two rules and add a message to errors for each problem, e.g.
    //   - the name is 2 to 30 letters
    //   - every question has one of the expected answers
    //   - at least one "What worries you most?" box is checked

    if (errors.length > 0) {
      // TODO: show each message in #error-list (with textContent) and unhide #form-errors
      return;
    }

    // TODO: add up the score out of 100, pick a tip for each weak answer,
    // and show them in #results-title and #results-tips (with textContent)
  });
}
