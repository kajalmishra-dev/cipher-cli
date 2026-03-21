# CipherCLI

CipherCLI is a lightweight Python command-line tool to encode and decode text using character substitution.

---

## Features

* Encode plain text into symbols
* Decode symbols back to readable text
* Modular and clean structure
* CLI-based usage (argument-driven)

---

## Project Structure

```
cipher-cli/
├── __init__.py
├── encoder.py
├── decoder.py
├── mapping.py
└── cli.py
```

---

## Usage

Run using module mode:

```
python -m pyencoder.cli encode "hello"
python -m pyencoder.cli decode "&#+$+"
```

---

## Example

| Input       | Output          |
| ----------- | --------------- |
| hello world | encoded symbols |
| encoded     | decoded text    |

---

## Learning Objectives

* CLI argument handling in Python
* Modular code organization
* String & dictionary manipulation

---

## Requirements

* Python 3.x

---

## License

MIT License