import subprocess

def convert_epub_to_mobi(input_file, output_file):
    command = ['ebook-convert', input_file, output_file]
    subprocess.run(command, check=True)

if __name__ == "__main__":
    print("Testing")
