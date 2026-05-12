const imageModules = import.meta.glob('../assets/stickers/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
  query: '?url',
})

export const STICKER_IMAGES = Object.fromEntries(
  Object.entries(imageModules).map(([path, url]) => {
    const fileName = path.split('/').pop()
    const key = fileName.replace(/\.(jpe?g|png|webp|avif)$/i, '')
    return [key.toUpperCase(), url]
  })
)

export function getStickerImage(imageKey) {
  return STICKER_IMAGES[imageKey?.toUpperCase()]
}
