import { ElementDetails } from './PortfolioContent'

const ElementList: React.FunctionComponent<{ elements: ElementDetails[] }> = ({
    elements,
}) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {elements.map((element) => (
                <a
                    style={{ display: 'flex', flexDirection: 'row', gap: 20 }}
                    href={element.href}
                >
                    <img
                        style={{
                            width: '100px',
                            height: '100px',
                            objectFit: element.fit || 'cover',
                        }}
                        width={100}
                        height={100}
                        src={element.src}
                        alt={element.primary}
                        draggable={false}
                    />
                    <div>
                        {element.primary && (
                            <h3 style={{ margin: 0 }}>{element.primary}</h3>
                        )}
                        <h5 style={{ margin: 0, marginTop: 5 }}>
                            {element.title}
                        </h5>
                        <h6 style={{ margin: 0, marginTop: 5 }}>
                            {element.time}
                        </h6>
                        <p
                            style={{
                                fontSize: '0.85em',
                                margin: 0,
                                marginTop: 5,
                            }}
                        >
                            {element.secondary}
                        </p>
                    </div>
                </a>
            ))}
        </div>
    )
}

export default ElementList
