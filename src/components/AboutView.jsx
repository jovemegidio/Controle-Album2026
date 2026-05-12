import React from 'react'
import { Icon } from './Icon'

export function AboutView() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-gray-800 bg-gray-900/70 p-4">
        <div className="mb-3 flex items-center gap-2 text-green-400">
          <Icon name="album" className="h-5 w-5" />
          <h2 className="text-base font-semibold text-gray-100">Controle Album 2026</h2>
        </div>
        <p className="text-sm leading-6 text-gray-300">
          Aplicativo em React para controlar figurinhas do album Panini FIFA World Cup 2026,
          marcar repetidas, filtrar faltantes e gerar lista de troca. Tudo fica salvo no
          navegador pelo localStorage.
        </p>
      </section>

      <section className="rounded-lg border border-gray-800 bg-gray-900/70 p-4">
        <div className="mb-3 flex items-center gap-2 text-blue-300">
          <Icon name="image" className="h-5 w-5" />
          <h2 className="text-base font-semibold text-gray-100">Fotos reais das figurinhas</h2>
        </div>
        <p className="text-sm leading-6 text-gray-300">
          O app carrega automaticamente fotos reais adicionadas em
          <code className="mx-1 rounded bg-gray-800 px-1.5 py-0.5 text-xs text-gray-100">
            src/assets/stickers
          </code>
          usando o padrao <strong>CODIGO-NUMERO</strong>, por exemplo
          <code className="mx-1 rounded bg-gray-800 px-1.5 py-0.5 text-xs text-gray-100">
            BRA-12.jpg
          </code>
          . Quando a foto ainda nao existe, a figurinha continua funcional com layout textual.
        </p>
      </section>

      <section className="rounded-lg border border-gray-800 bg-gray-900/70 p-4">
        <div className="mb-3 flex items-center gap-2 text-yellow-300">
          <Icon name="trophy" className="h-5 w-5" />
          <h2 className="text-base font-semibold text-gray-100">GitHub Pages</h2>
        </div>
        <p className="text-sm leading-6 text-gray-300">
          A publicacao e feita por GitHub Actions: o workflow instala as dependencias,
          roda o build do Vite e envia a pasta <code className="rounded bg-gray-800 px-1.5 py-0.5 text-xs">dist</code>
          para o Pages com o caminho base do repositorio.
        </p>
      </section>
    </div>
  )
}
