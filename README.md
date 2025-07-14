## PyEncoder
PyEncoder is a simple and beginner-friendly Python command-line tool that lets you encode and decode secret messages using symbol substitution.

### Features
* Encode plain text into disguised symbols
* Decode symbols back into readable text
* Fully modular with reusable character map
* Requires only Python (no extra libraries)
  
### Project Structure
PyEncoder/
├── encoder.py     # CLI script to encode messages
├── decoder.py     # CLI script to decode messages
└── mapping.py     # Shared character-symbol mapping

### How to Run
Requirements: Python 3.x installed
__To encode a message:__
```bash
python encoder.py
```
__To decode a message:__
```bash
python decoder.py
```
__Example:__
* Input: `hello world`
* Encoded: `&#$+$ 7+2$)`
* Decoded: `hello world`

### How It Works
The program uses a character substitution dictionary like this:
```python
char_map = {
    'a': '@',
    'e': '#',
    'l': '$',
    'o': '+'
}
```
Each character is replaced by a symbol when encoding, and reversed during decoding using a reverse map.

### Learning Goals
This project helps reinforce:
* String and dictionary manipulation
* Writing modular Python code
* Reading user input in the CLI
* Reversible encoding logic
  
### License
This project is open-source and available under the __MIT License__.
