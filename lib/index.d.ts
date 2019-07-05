declare module 'react-semantic-toasts' {
    import { SemanticICONS } from 'semantic-ui-react'
    type ContainerPosition = 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left'
    type SemanticAnimation = 'scale' | 'zoom' | 'fade' | 'fade up' | 'fade down' | 'fade left' | 'fade right' | 'horizontal flip' | 'vertical flip' | 'drop' | 
        'fly left' |'fly right' | 'fly down' | 'fly up' | 'swing left' | 'swing right' | 'swing up' | 'swing down' | 'browse' | 'browse right' | 'slide down' | 
        'slide up' | 'slide left' | 'slide right' | 'jiggle' | 'flash' | 'shake' | 'pulse' | 'tada' | 'bounce' | 'glow'

    const SemanticToastContainer: (
        props: {
            position?: ContainerPosition
            animation?: SemanticAnimation
        }
    ) => JSX.Element
    const toast: (
        options: {
            title: string
            description?: string
            type?: 'info' | 'success' | 'warning' | 'error'
            icon?: SemanticICONS
            time?: number
            animation?: SemanticAnimation
        },
        onClose?: () => void,
        onClick?: () => void
    ) => void

    export { SemanticToastContainer, toast }
};