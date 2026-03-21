# encoder

from .mapping import char_map

def encode(message):
    message = message.lower()
    encoded = ''
    for char in message:
        encoded += char_map.get(char, char)  # Use mapped char
    return encoded
