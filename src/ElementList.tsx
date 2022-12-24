import * as React from 'react'
import { ElementDetails } from './PortfolioContent'

const ElementList: React.FunctionComponent<{ elements: ElementDetails[] }> = (
    props
) => {
    const { elements } = props
    const elementComponents = elements.map((el) => (
        <li key={el.src} onClick={() => window.open(el.href)}>
            <img alt={el.primary} src={el.src} />
            <p>{el.primary}</p>
            <p>{el.secondary}</p>
        </li>
    ))
    return <ol>{elementComponents}</ol>
}

export default ElementList
