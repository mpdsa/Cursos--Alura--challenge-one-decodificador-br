let textEncrypted = ""
let textDecrypted = ""
const enc = document.getElementById('encrypt')
const dec = document.getElementById('decrypt')
const textUser = document.getElementById('textInsert')
const showText = document.getElementById('textEncrypted')
const fieldTextDecEnd = document.querySelector('main>div:nth-child(2)')

const letterEncrypt = (letter) => {
  if (letter === 'a') return 'ai';
  if (letter === 'e') return 'enter';
  if (letter === 'i') return 'imes';
  if (letter === 'o') return 'ober';
  if (letter === 'u') return 'ufat';
  return letter;
}

const letterDecrypt = (text) => {
  return text.replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u')
}

enc.addEventListener('click', () => {
  for (const letter of textUser.value) {
    textEncrypted += letterEncrypt(letter)
  }

  fieldTextDecEnd.setAttribute('class', "textRealign")
  showText.innerText = textEncrypted
  textEncrypted = ''
})

dec.addEventListener('click', () => {
  fieldTextDecEnd.setAttribute('class', "textRealign")

  textDecrypted = textUser.value
  showText.innerText = letterDecrypt(textDecrypted)
  textEncrypted = ''
})

