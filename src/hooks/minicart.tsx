import React, {
    createContext,
    PropsWithChildren,
    useCallback,
    useContext,
    useEffect,
    useState
} from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { IState } from 'store'
import { closeMiniCart } from 'store/modules/cart'

interface IMiniCartContextData {
    dropped: boolean
    dropMiniCart(): void
}

const MiniCartContext = createContext<IMiniCartContextData>(
    {} as IMiniCartContextData
)

export const MiniCartProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const dispatch = useDispatch()
    const showMiniCart = useSelector<IState, boolean>(
        state => state.cart.showMiniCart
    )
    const [dropped, setDropped] = useState(false)

    const dropMiniCart = useCallback(() => {
        setDropped(state => !state)
    }, [])

    useEffect(() => {
        if (showMiniCart) {
            setDropped(true)
            setTimeout(() => {
                dispatch(closeMiniCart())
            }, 3000)
        }
    }, [dispatch, showMiniCart])

    return (
        <MiniCartContext.Provider value={{ dropped, dropMiniCart }}>
            {children}
        </MiniCartContext.Provider>
    )
}

export function useMiniCart(): IMiniCartContextData {
    const context = useContext(MiniCartContext)

    return context
}
