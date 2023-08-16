export default function randomLetter() {
  const letter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const randomIndex = Math.floor(Math.random() * letter.length)
  return letter.charAt(randomIndex)
}
