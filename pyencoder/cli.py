import sys
from encoder import encode
from decoder import decode

def main():
    if len(sys.argv) < 3:
        print("Usage:")
        print("encode: python cli.py encode 'text'")
        print("decode: python cli.py decode 'text'")
        return

    mode = sys.argv[1]
    text = sys.argv[2]

    if mode == "encode":
        print(encode(text))
    elif mode == "decode":
        print(decode(text))
    else:
        print("Invalid option")

if __name__ == "__main__":
    main()