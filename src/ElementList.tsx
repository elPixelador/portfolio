import * as React from 'react'
import { ElementDetails } from './PortfolioContent'

const ElementList: React.FunctionComponent<{ elements: ElementDetails[] }> = (
    props
) => {
    const { elements } = props
    const elementComponents = elements.map((el) => (
        <div key={el.src}>
            <img
                style={{ height: 50, aspectRatio: 'auto', cursor: 'pointer' }}
                alt={el.primary}
                src={el.src}
                onClick={() => window.open(el.href)}
            />
        </div>
    ))
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                columnGap: 20,
                backgroundColor: '#181818',
                borderRadius: 5,
                padding: '15px 0px',
            }}
        >
            {elementComponents}
        </div>
    )
}

export default ElementList
