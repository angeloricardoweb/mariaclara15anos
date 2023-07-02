import React, { useState } from 'react'
import Container from '../components/Partials/Container'
import { Icon } from '@iconify/react'

export const convidados = [
  { nome: 'Jon Castiel' },
  { nome: 'Angelo' },
  { nome: 'Mary' },
  { nome: 'Vovó Djanira' },
  { nome: 'Tia Tereza e tio Reis' },
  { nome: 'Reinaldo' },
  { nome: 'Reginaldo' },
  { nome: 'Regiane e Maria' },
  { nome: 'Tia Inacia e Manuel' },
  { nome: 'Aparecida e Maria Isis' },
  { nome: 'Marcela e família' },
  { nome: 'Tia Tereza e família' },
  { nome: 'Tia Ana e Vitória' },
  { nome: 'Tia Luiza e familia' },
  { nome: 'Marcelo e Milena' },
  { nome: 'Carol e Adria' },
  { nome: 'Vitor e Vitória' },
  { nome: 'D. Rita e família' },
  { nome: 'Tio Antônio e família' },
  { nome: 'Tio Francisco e família' },
  { nome: 'Tio Fernando e família' },
  { nome: 'Tio Fernando e Áurea' },
  { nome: 'Alesi e Laís' },
  { nome: 'Francisco e Terezinha' },
  { nome: 'Zé Carlos e Maria José' },
  { nome: 'Rocha e Soraya' },
  { nome: 'Aguinalgo e Luciana' },
  { nome: 'Marcelo e Jucy' },
  { nome: 'Celina' },
  { nome: 'D Ivana' },
  { nome: 'Alzira' },
  { nome: 'Hordilene' },
  { nome: 'Maia e Margarida' },
  { nome: 'Socorro e Maria Clara' },
  { nome: 'Ana Clara' },
  { nome: 'Hordilene e Alice' },
  { nome: 'Maria Eduarda' },
  { nome: 'Edna e Ana Laura' },
  { nome: 'Bárbara' },
  { nome: 'Jheniffer' },
  { nome: 'Maria Barreiros' },
  { nome: 'Prof. Raissa' },
  { nome: 'Prof. Patrick' },
  { nome: 'Prof. Alexandre' },
  { nome: 'Vanderson' },
  { nome: 'Luis' },
  { nome: 'Carlos Edurado' },
]

export default function lista() {
  return (
    <main className="mt-10 mb-20">
      <Container>
        <h1 className="text-green-600 font-bold text-3xl">Lista de convidados</h1>
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
    <div key={convidado.nome} className="flex justify-between mb-2 items-center">
      <strong className='text-xl'>{convidado.nome}</strong>
      <span
        className="px-3 py-2 shadow rounded-xl active:bg-green-100 cursor-pointer text-xl"
        onClick={() => {
          const nome = convidado.nome.replace(' ', '%20').replace(' ', '%20').replace(' ', '%20').replace(' ', '%20')
          navigator.clipboard.writeText(
            `https://mariaclara15anos.vercel.app/convite/${nome}`
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
