// TODO: Fix and uncomment
/* import React, { FC, ReactNode } from 'react'
* import cn from 'classnames'
* import { PoppinsBlack } from '@/utils/fonts'
* import classes from './Typogoraphy.module.scss'
*
* // Defining the HTML tag that the component will support
* const variantsMapping = {
*   h0: 'h0',
*   h1: 'h1',
*   h2: 'h2',
*   h3: 'h3',
*   h4: 'h4',
*   VTH1: 'p',
*   VTH3: 'p',
*   body1: 'p',
*   special1: 'p'
* } as { [key: string]: string }
*
* type VariantsType =
*   | 'h0'
*   | 'h1'
*   | 'h2'
*   | 'h3'
*   | 'h4'
*   | 'body1'
*   | 'special1'
*   | 'VTH1'
*   | 'VTH3'
*
* type Props = {
*   variant?: VariantsType
*   children: ReactNode
*   vt?: boolean
*   className?: string
*   secondary?: boolean
*   accent?: boolean
*   onClick?: () => void
* }
*
* // variant: the selected html tag
* // children: the node passed inside the Component
* // ...props: the default attribute of the Component
* const Typography: FC<Props> = (props) => {
*   const {
*     variant, children, vt, secondary, className, accent
*   } = props
*   const Component = variant && !accent ? variantsMapping[variant] : 'span'
*   const style = classes[`typography--variant-${variant}`]
*   return (
*     // @ts-ignore
*     <Component
*       {...props}
*       className={cn(
*         PoppinsBlack.className,
*         className
*       )}
*     >
*       {children}
*     </Component>
*   )
* }
*
* export default Typography */
