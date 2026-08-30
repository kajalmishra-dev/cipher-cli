# cipher-cli
A small substitution cipher - encode text into symbols, then decode it back. Same mapping in a Python CLI and a simple web page.

![cipher-cli web demo](linkedin-demo/sample.png)

## Try the web page
Open `index.html` in a browser, or serve the folder:

```powershell
python -m http.server 8765
```

Then go to [http://127.0.0.1:8765](http://127.0.0.1:8765).

After GitHub Pages is on: [https://kajalmishra-dev.github.io/cipher-cli/](https://kajalmishra-dev.github.io/cipher-cli/)

## CLI
```powershell
cd pyencoder
python cli.py encode 'hello world'
python cli.py decode '&#$$+ 7+2$)'
```

| Input         | Output         |
| ------------- | -------------- |
| `hello world` | `&#$$+ 7+2$)`  |
| `&#$$+ 7+2$)` | `hello world`  |

On PowerShell, wrap text in single quotes so `$` is not treated as a variable.

## Mapping
Letters are swapped; everything else stays as-is.

```
a@  b8  c(  d)  e#  f!  g9  h&  i*  j%
k<  l$  m^  n~  o+  p0  q1  r2  s3  t4
u5  v6  w7  x=  y?  z/
```

## Layout
```
cipher-cli/
├── index.html    
├── pyencoder/
│   ├── cli.py
│   ├── encoder.py
│   ├── decoder.py   
│   └── mapping.py
└── demo/      # screenshot
```

## License
MIT - Kajal Mishra
