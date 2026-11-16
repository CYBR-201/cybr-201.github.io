// script.js: shared by every page.
// Each feature first checks that its elements are on the current page,
// so the same file can be loaded everywhere.
//
// Security rules from the project guidelines:
// - Put user-typed text on the page with textContent, never innerHTML.
// - Validate everything the user enters, in JavaScript as well as HTML.

// ---------- Feature 1: show/hide sections (Welcome and Background pages) ----------

const toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // TODO: find the panel this button controls (its aria-controls attribute)
    // TODO: switch aria-expanded between "true" and "false"
    // TODO: show or hide the panel with its hidden property
  });
});

// ---------- Quiz page ----------

const form = document.getElementById('checkup-form');

if (form) {
  const progressText = document.getElementById('progress-text');

  // ---------- Feature 2: progress counter ----------

  const updateProgress = function () {
    // TODO: count how many of the six questions have an answer
    // TODO: show it in progressText, e.g. "4 of 6 questions answered"
  };

  // TODO: once the radio buttons and dropdowns are in quiz.html, uncomment this
  // so each one updates the counter when it changes:
  //
  // form.querySelectorAll('input[type="radio"], select').forEach(function (field) {
  //   field.addEventListener('change', updateProgress);
  // });

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
