/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import Container from '../../components/Partials/Container'
import { convidados } from '../lista'

type Props = {
  nome: string
}

export default function Nome(props: Props) {
  const [aberto, setAberto] = useState(false)
  const { nome } = props

  useEffect(() => {
    setTimeout(() => {
      setAberto(true)
    }, 5000)
  }, [])

  return (
    <div
      className="bg-convite"
    >
      <Container>
        {aberto ? (
          <Fade>
            <img
              src="/nome.png"
              alt="Maria Clara"
              className="max-w-[600px] w-full
              "
            />
            <div className="max-w-xl mt-10">
              <h2 className="text-center text-bold text-white italic text-2xl">
                Para viver emoções deste dia tão importante quero estar ao lado
                de pessoas especiais como você, <strong> {nome}.</strong>
              </h2>
              <div className="mt-20">
                <h2 className="text-center text-bold uppercase text-white italic text-lg">
                  Cidade Nova 6, We 72 n°921 - Coqueiro, Ananindeua
                </h2>
                <h2 className="text-center text-bold uppercase text-white italic text-3xl">
                  26 de Agosto de 2023
                </h2>
                <h2 className="text-center text-bold uppercase text-white italic text-3xl">
                  22 Hrs
                </h2>
              </div>
              <div className="w-full flex justify-center mt-10">
                <a
                  href="https://goo.gl/maps/M1YF2AQ4e6eyy4UM6"
                  target="_blank"
                  rel="noreferrer"
                  className="text-center text-cyan-800 mx-auto px-3 py-1 bg-rose-100 rounded-xl"
                >
                  Ver local no mapa
                </a>
              </div>
            </div>
          </Fade>
        ) : (
          <Fade>
            <div className="flex flex-col items-end justify-center text-white">
              <h2 className="text-3xl italic">
                Como as Plantas, a amizade não deve ser muito nem pouco regada.
              </h2>
              <span>- Carlos Drummond de Andrade</span>
            </div>
          </Fade>
        )}
      </Container>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = convidados.map((convidado) => {
    return {
      params: {
        nome: convidado.nome,
      },
    }
  })

  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: any) => {
  const { nome } = params

  return {
    props: {
      nome,
    },
  }
}
