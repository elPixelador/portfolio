import * as React from 'react'
import { ElementDetails } from './PortfolioContent'

const MiniElementList: React.FunctionComponent<{
    elements: ElementDetails[]
}> = ({ elements }) => {
    return (
        <div style={{ display: 'flex', columnGap: 20, marginTop: 20 }}>
            {elements.map((el) => (
                <a
                    key={el.href}
                    href={el.href}
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        style={{ width: 40 }}
                        src={el.src}
                        alt={el.secondary}
                    />
                </a>
            ))}
        </div>
    )
}

export default MiniElementList
