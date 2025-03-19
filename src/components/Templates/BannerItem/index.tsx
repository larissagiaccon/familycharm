/* eslint-disable react/jsx-no-target-blank */
import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import * as S from './styles'

interface IBanner {
    banner: any
    index: number
}

export default function BannerItem({ banner, index }: IBanner) {
    const [windowWidth, setWindowWidth] = useState('web')

    function resizeWindow() {
        if (typeof window !== 'undefined') {
            if (window.innerWidth > 768) {
                setWindowWidth('web')
            } else {
                setWindowWidth('mobile')
            }
        }
    }

    useEffect(() => {
        resizeWindow()
    }, [])

    if (typeof window !== 'undefined') {
        window.addEventListener('resize', resizeWindow)
    }

    return (
        <S.Container
            className="banner-item"
            key={`${banner.id}-${banner.titulo}`}
            style={{ backgroundColor: banner.backgroundColor }}
        >
            <Link
                href={
                    banner.redirecionarUrl !== null
                        ? `${banner.redirecionarUrl}?campanha=true`
                        : '/'
                }
                passHref
            >
                {banner.abrirNovaJanela ? (
                    <a
                        href={`${banner.redirecionarUrl}`}
                        title={banner.titulo}
                        target={banner.abrirNovaJanela ? '_blank' : ''}
                        rel={
                            banner.abrirNovaJanela ? 'noopener noreferrer' : ''
                        }
                    >
                        {banner.videoUrl !== null && banner.videoUrl !== '' ? (
                            <video key={index} autoPlay loop muted>
                                <source
                                    src={banner.videoUrl}
                                    type="video/mp4"
                                />
                                Seu navegador não suporta a tag de vídeo.
                            </video>
                        ) : (
                            <img
                                loading="lazy"
                                src={
                                    windowWidth === 'web'
                                        ? banner.imagemUrl
                                        : banner.imagemMobileUrl
                                }
                                alt={banner.titulo}
                            />
                        )}
                    </a>
                ) : (
                    <a href={`${banner.redirecionarUrl}` || '/'}>
                        {banner.videoUrl !== null && banner.videoUrl !== '' ? (
                            <video key={index} autoPlay loop muted>
                                <source
                                    src={banner.videoUrl}
                                    type="video/mp4"
                                />

                                {windowWidth === 'web'
                                    ? banner.imagemUrl
                                        ? banner.imagemUrl
                                        : 'Seu navegador não suporta a tag de vídeo.'
                                    : banner.imagemMobileUrl
                                    ? banner.imagemMobileUrl
                                    : 'Seu navegador não suporta a tag de vídeo.'}
                            </video>
                        ) : (
                            <img
                                loading="lazy"
                                title={banner.titulo}
                                src={
                                    windowWidth === 'web'
                                        ? banner.imagemUrl
                                        : banner.imagemMobileUrl
                                }
                                alt={banner.titulo}
                            />
                        )}
                    </a>
                )}
            </Link>
        </S.Container>
    )
}
