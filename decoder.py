# decoder

from mapping import char_map

# Reverse the mapping
reverse_map = {v: k for k, v in char_map.items()}

def decode(encoded_message):
    decoded = ''
    for char in encoded_message:
        decoded += reverse_map.get(char, char)  # Use original char
    return decoded

if __name__ == "__main__":
    code = input("Enter message to DECODE: ")
    print("Decoded:", decode(code))