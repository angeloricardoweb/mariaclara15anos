import React, { useState } from 'react'
import Container from '../components/Partials/Container'
import { Icon } from '@iconify/react'
const convidados = [
  { nome: 'Jon Castiel' },
  { nome: 'Angelo' },
  { nome: 'Mary' },
]

export default function lista() {
  return (
    <main className="mt-10">
      <Container>
        <h1 className="text-green-600 font-bold">Lista de convidados</h1>
        <section>
          {convidados.map((convidado) => {
            return <Convidado {...convidado} key={convidado.nome} />
          })}
        </section>
      </Container>
    </main>
  )
}

function Convidado(convidado: any) {
  const [copied, setCopied] = useState(false)
  return (
    <div key={convidado.nome} className="flex justify-between mb-1 items-center">
      <strong>{convidado.nome}</strong>
      <span
        className="px-3 py-2 shadow rounded-xl active:bg-green-100 cursor-pointer"
        onClick={() => {
          navigator.clipboard.writeText(
            `https://mariaclara15anos.vercel.app/convite/${convidado.nome}`
          )
          setCopied(true)
        }}
      >
        {copied ? (
          <Icon icon="material-symbols:check" className="mr-2" />
        ) : (
          'Copiar'
        )}
      </span>
    </div>
  )
}
