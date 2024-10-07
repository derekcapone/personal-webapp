import subprocess

def convert_epub_to_mobi(epub_path, mobi_path):
    ebook_convert_path = 'C:\Program Files\Calibre2\ebook-convert.exe'
    result = subprocess.run([ebook_convert_path, epub_path, mobi_path])
    if result.returncode == 0:
        print(f'Successfully converted {epub_path} to {mobi_path}')
        return False
    else:
        print(f'Error converting {epub_path} to {mobi_path}')
        return True
    

if __name__ == "__main__":
    epub_file_name = r'C:\Users\derek\Desktop\CodePractice\personal-webapp\python\test\ebookFiles\SiloSrs.epub'
    mobi_file_name = r'C:\Users\derek\Desktop\CodePractice\personal-webapp\python\test\ebookFiles\SiloSrs.mobi'
    convert_epub_to_mobi(epub_file_name, mobi_file_name)
