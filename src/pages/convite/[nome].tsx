/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { Fade } from 'react-reveal'
import Container from '../../components/Partials/Container'

type Props = {
  nome: string
}

export default function Nome(props: Props) {
  const [aberto, setAberto] = useState(false)
  const { nome } = props

  useEffect(()=>{
    setTimeout(() => {
      setAberto(true)
    }, 5000);
  
  },[])

  return (
    <div className="bg-[url(/bg.jpg)] h-screen bg-cover bg-center flex flex-col items-center justify-center">
      <Container>
        {aberto ? (
          <Fade>
            <img
              src="/nome.svg"
              alt="Maria Clara"
              className="max-w-[600px] w-full"
            />
              <div className="max-w-xl mt-10">
                <h2 className="text-center text-bold uppercase text-rose-100 italic text-lg">
                  Para viver emoções deste dia tão importante quero estar ao
                  lado de pessoas especiais como você, <strong> {nome}.</strong>
                </h2>
              </div>
          </Fade>
        ) : (
          <Fade>
            <div className="flex flex-col items-end justify-center text-rose-100">
              <h2 className="text-2xl italic">
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
  const paths = [
    { params: { nome: 'Jon Castiel' } },
    { params: { nome: 'Angelo' } },
    { params: { nome: 'Mary' } },
  ]

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
