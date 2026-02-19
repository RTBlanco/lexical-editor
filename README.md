# Lexical Editor (React + Vite)

A small playground project for experimenting with **Meta’s Lexical** rich-text editor inside a **React + Vite** app. It includes a basic editor setup with common Lexical plugins plus simple toolbar actions for **headings (H1–H3)** and **lists (ordered + unordered)**. ([GitHub][1])

---

## Features

* **Rich text editing** via `RichTextPlugin`
* **Undo / redo history** via `HistoryPlugin`
* **Autofocus on load** via `AutoFocusPlugin`
* **Headings toolbar**: H1, H2, H3
* **Lists toolbar**: OL / UL
* Minimal styling for the editor surface + placeholder ([GitHub][2])

---

## Tech Stack

* React (Vite) ([GitHub][1])
* Lexical + `@lexical/react` ([GitHub][1])

---

## Getting Started

### Prereqs

* Node.js (any modern LTS is fine)

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```
(Available scripts are defined in `package.json`.) ([GitHub][1])

---

## How it works

The editor is built with `LexicalComposer` and common plugins (rich text, history, autofocus, list support). Custom toolbar buttons use Lexical commands/updates to:

* change block type to headings using `$setBlocksType(...)` + `$createHeadingNode(tag)`
* insert lists using `INSERT_ORDERED_LIST_COMMAND` / `INSERT_UNORDERED_LIST_COMMAND` ([GitHub][2])

---

## Project Structure (high-level)

* `src/App.jsx` – app shell + renders the editor ([GitHub][3])
* `src/Editor.jsx` – Lexical setup, plugins, toolbar actions ([GitHub][2])
* `src/index.css` – basic styling for editor surface + placeholder ([GitHub][4])

---

## Credits

Built using **Lexical**, an extensible text editor framework by Meta. (Main Lexical repo: facebook/lexical.) ([GitHub][5])

[1]: https://raw.githubusercontent.com/RTBlanco/lexical-editor/main/package.json "raw.githubusercontent.com"
[2]: https://raw.githubusercontent.com/RTBlanco/lexical-editor/main/src/Editor.jsx "raw.githubusercontent.com"
[3]: https://raw.githubusercontent.com/RTBlanco/lexical-editor/main/src/App.jsx "raw.githubusercontent.com"
[4]: https://raw.githubusercontent.com/RTBlanco/lexical-editor/main/src/index.css "raw.githubusercontent.com"
[5]: https://github.com/facebook/lexical?utm_source=chatgpt.com "Lexical is an extensible text editor framework that provides ..."
