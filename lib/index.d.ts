declare module 'react-semantic-toasts' {
    import { SemanticICONS, SemanticSIZES, SemanticCOLORS } from 'semantic-ui-react'
    type ContainerPosition = 'top-right' | 'top-center' | 'top-left' | 'bottom-right' | 'bottom-center' | 'bottom-left'
    type SemanticAnimation = 'scale' | 'zoom' | 'fade' | 'fade up' | 'fade down' | 'fade left' | 'fade right' | 'horizontal flip' | 'vertical flip' | 'drop' |
        'fly left' | 'fly right' | 'fly down' | 'fly up' | 'swing left' | 'swing right' | 'swing up' | 'swing down' | 'browse' | 'browse right' | 'slide down' |
        'slide up' | 'slide left' | 'slide right' | 'jiggle' | 'flash' | 'shake' | 'pulse' | 'tada' | 'bounce' | 'glow'
    type ToastType = 'info' | 'success' | 'warning' | 'error'

    interface ToastOptions {
        title: string
        description?: string
        type?: ToastType
        icon?: SemanticICONS
        time?: number
        animation?: SemanticAnimation
        size?: SemanticSIZES
        color?: SemanticCOLORS
    }

    const SemanticToastContainer: (
        props: {
            position?: ContainerPosition
            animation?: SemanticAnimation
            className?: string
        }
    ) => JSX.Element

    const toast: (
        options: ToastOptions,
        onClose?: () => void,
        onClick?: () => void,
        onDismiss?: () => void,
    ) => void

    export { SemanticToastContainer, toast, ToastOptions }
}
