import React, { useEffect, useState } from 'react'

import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

import { IImageProps } from 'mocks/mockedProduct' // TODO REMOVER MOCK

import * as S from './styles'

interface GalleryProps {
    videoUrl?: string
    images: IImageProps[]
    classNameContainer?: string
    setShowProductVideo(state: boolean): void
}

export function Gallery({
    images,
    videoUrl,
    classNameContainer = '',
    setShowProductVideo
}: GalleryProps) {
    const [counter, setCounter] = useState(1)

    function prevGallery() {
        if (counter === 0) return null

        const itemGallery: any = document.querySelector(
            '#gallery-product .image-carousel'
        )

        const itemGalleryHeight = itemGallery.offsetHeight + 30

        const valueTranslate =
            counter === 1 ? 0 : itemGalleryHeight * (counter - 1)

        const scroller = document.getElementById('scroller') as HTMLElement

        if (scroller)
            scroller.style.transform = 'translateY(-' + valueTranslate + 'px)'

        setCounter(old => old - 1)
    }

    function nextGallery() {
        const itemsGallery = document.querySelectorAll(
            '#gallery-product .image-carousel'
        )

        if (
            itemsGallery.length === counter - 1 + 5 ||
            itemsGallery.length <= 5
        ) {
            return null
        }

        const itemGallery: any = document.querySelector(
            '#gallery-product .image-carousel'
        )

        const itemGalleryHeight = itemGallery.offsetHeight + 30
        const scroller = document.getElementById('scroller') as HTMLElement

        if (counter === 0 && !!scroller)
            scroller.style.transform =
                'translateY(-' + itemGalleryHeight + 'px)'
        else {
            if (scroller)
                scroller.style.transform =
                    'translateY(-' + itemGalleryHeight * counter + 'px)'
        }

        setCounter(old => old + 1)
    }

    function setSrcInPrincipalImage(element) {
        setShowProductVideo(false)

        const itemsGallery: NodeListOf<HTMLElement> = document.querySelectorAll(
            '#gallery-product .image-carousel'
        )
        const itemToActive = document.getElementById(
            element
        ) as HTMLElement | null

        if (!itemToActive) return // Se não encontrar o elemento, sai da função

        // Remove a classe 'active' de todos os itens da galeria
        itemsGallery.forEach(item => item.classList.remove('active'))

        // Adiciona a classe 'active' ao item clicado
        itemToActive.classList.add('active')

        // Atualiza a imagem principal
        const productImage = document.getElementById(
            'product-image'
        ) as HTMLImageElement | null
        if (productImage) {
            productImage.src = itemToActive.getAttribute('src') || ''
        }
    }

    function setSrcInPrincipalVideo(element) {
        const itemsGallery: NodeListOf<HTMLElement> = document.querySelectorAll(
            '#gallery-product .video-carousel'
        )
        const itemToActive = document.getElementById(
            element
        ) as HTMLElement | null

        if (!itemToActive) return // Se não encontrar o elemento, sai da função

        // Remove a classe 'active' de todos os itens da galeria
        itemsGallery.forEach(item => item.classList.remove('active'))

        // Adiciona a classe 'active' ao item clicado
        itemToActive.classList.add('active')

        // Atualiza a imagem principal
        const productVideo = document.getElementById(
            'product-video'
        ) as HTMLImageElement | null
        if (productVideo) {
            productVideo.src = itemToActive.getAttribute('src') || ''
        }

        setShowProductVideo(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setSrcInPrincipalImage(images[0].grande)
        }, 10)
    }, [images])

    return (
        <S.Container
            id="gallery"
            className={`gallery${classNameContainer}`}
            style={{ marginTop: images.length > 4 ? '1rem' : '0' }}
        >
            {images.length > 4 && (
                <>
                    <FiChevronUp
                        className="arrow-up-icon"
                        title="Voltar"
                        onClick={prevGallery}
                    />
                    <FiChevronDown
                        className="arrow-down-icon"
                        title="Voltar"
                        onClick={nextGallery}
                    />
                </>
            )}

            <div id="gallery-product" className="left-carousel">
                <div id="scroller">
                    {images.map((i, index) => (
                        <>
                            {index !== 1 ? (
                                <img
                                    key={index}
                                    id={i.grande}
                                    className="image-carousel active"
                                    onClick={() =>
                                        setSrcInPrincipalImage(i.grande)
                                    }
                                    loading="lazy"
                                    src={i.grande}
                                    alt={i.grande}
                                />
                            ) : (
                                <>
                                    {videoUrl !== null && videoUrl !== '' && (
                                        <div
                                            className="video-container"
                                            onClick={() =>
                                                setSrcInPrincipalVideo(videoUrl)
                                            }
                                        >
                                            <video
                                                autoPlay
                                                loop
                                                muted
                                                key={videoUrl}
                                                id={videoUrl}
                                                className="video-carousel active"
                                            >
                                                <source
                                                    src={videoUrl}
                                                    type="video/mp4"
                                                />
                                                Seu navegador não suporta a tag
                                                de vídeo.
                                            </video>
                                            <button id="playButton">▶</button>
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    ))}
                </div>
            </div>
        </S.Container>
    )
}
