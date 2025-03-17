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
                        <img
                            loading="lazy"
                            src={
                                windowWidth === 'web'
                                    ? banner.imagemUrl
                                    : banner.imagemMobileUrl
                            }
                            alt={banner.titulo}
                        />
                    </a>
                ) : (
                    <a href={`${banner.redirecionarUrl}` || '/'}>
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
                    </a>
                )}
            </Link>
        </S.Container>
    )
}
