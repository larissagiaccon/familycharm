import Footer from './Footer'
import Header from './Header'

import * as S from './styles'

export default function Layout({ children }) {
    return (
        <S.Container className="layout">
            <Header />

            <main>{children}</main>

            <Footer />
        </S.Container>
    )
}
