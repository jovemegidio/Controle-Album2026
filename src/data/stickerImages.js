// Cache local das imagens já carregadas
const imageModules = import.meta.glob('../assets/stickers/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
  query: '?url',
})

export const LOCAL_STICKER_IMAGES = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => {
    const fileName = path.split('/').pop()
    const key = fileName.replace(/\.(jpe?g|png|webp|avif)$/i, '')
    return [key.toUpperCase(), url]
  })
)

// Gera URL da figurinha baseado no número
// Para usar imagens locais, coloque na pasta src/assets/stickers/ com o nome igual ao número (ex: 001.jpg, 002.jpg)
export function getStickerImage(imageKey, stickerNum) {
  // Primeiro verifica se tem imagem local pelo imageKey
  if (imageKey) {
    const localImage = LOCAL_STICKER_IMAGES[imageKey.toUpperCase()]
    if (localImage) return localImage
  }
  
  // Depois verifica se tem imagem local pelo número
  if (stickerNum) {
    const paddedNum = String(stickerNum).padStart(3, '0')
    const numImage = LOCAL_STICKER_IMAGES[paddedNum]
    if (numImage) return numImage
  }
  
  return null
}
