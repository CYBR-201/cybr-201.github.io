# Privacy & Security Checkup Questionnaire

CYBR 201 Final Team Project: a small website where college students check their everyday privacy and
security habits and get a score with tips to fix what needs work.

Live site: https://cybr-201.github.io/

## Pages

| File | What goes on it |
| --- | --- |
| `index.html` | Welcome page: what the site does, how to use it, show/hide guidelines |
| `quiz.html` | The questionnaire form, progress counter and results |
| `background.html` | How-to's and cyber hygiene tips for each quiz topic |

`styles.css` is the shared stylesheet (no styling yet) and `script.js` is the shared script.

## JavaScript features (script.js)

1. Show/hide sections on the Welcome and Background pages
2. Progress counter on the quiz
3. Score and tips built from the quiz answers

## Security plan

- `preventDefault()` stops the form from submitting, so answers never appear in the address bar.
- User input goes on the page with `textContent`, never `innerHTML`.
- JavaScript checks every answer again and accepts only expected values.
- No passwords or other sensitive data, and no API keys or secrets.

## Team and contributions

| Team member | What they worked on |
| --- | --- |
| Name | |
| Name | |
| Name | |

## References

List any tutorials or other sources the team used.

## Running it locally

Open `index.html` in a browser. No server or install is needed.
