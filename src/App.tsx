import React from 'react'
import ContentSection from './ContentSection'
import {
    contributions,
    employers,
    mediaLinks,
    projects,
} from './PortfolioContent'

import ElementList from './ElementList'
import MiniElementList from './MiniElementList'

const getBrowserLangGreeting = () => {
    console.log('Language Detected: ' + navigator.language)
    switch (navigator.language) {
        case 'da-DK':
            return 'Halløj'
        case 'es-ES':
            return 'Hola'
        default:
            return 'Hello'
    }
}

const App: React.FunctionComponent = () => {
    const isSmall = window.innerWidth < 600
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: isSmall ? '95%' : '1000px',
                margin: '30px auto 30px auto',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    style={{ width: 150, borderRadius: 8 }}
                    src="https://avatars3.githubusercontent.com/u/7558040"
                    alt="a portrait of liam"
                />
                <Heading>{getBrowserLangGreeting()} 👋</Heading>
                <MiniElementList elements={mediaLinks} />
                <Paragraph style={{ maxWidth: 500, textAlign: 'center' }}>
                    I'm Liam, I'm a{' '}
                    <HighlightedText>software developer</HighlightedText> based
                    in Melbourne, Australia. My fields of interest lie in
                    software architecture, optimization and computer graphics.
                </Paragraph>
            </div>
            <ContentSection title="Employment History">
                <ElementList elements={employers} />
            </ContentSection>
            <ContentSection title="Personal Projects">
                <ElementList elements={projects} />
            </ContentSection>
            <ContentSection title="Open Source Contributions">
                <ElementList elements={contributions} />
            </ContentSection>
            <footer>
                <Paragraph>Made with ❤️ by Liam Parker</Paragraph>
            </footer>
        </div>
    )
}

export const Heading: React.FunctionComponent<{
    children?: React.ReactNode
}> = ({ children }) => <h1>{children}</h1>

export const SubHeading: React.FunctionComponent<{
    children?: React.ReactNode
}> = ({ children }) => <h2>{children}</h2>

export const Paragraph: React.FunctionComponent<{
    children?: React.ReactNode
    style?: React.CSSProperties
}> = ({ children, style }) => <p style={style}>{children}</p>

export const HighlightedText: React.FunctionComponent<{
    children?: React.ReactNode
}> = ({ children }) => <span style={{ fontWeight: 'bold' }}>{children}</span>

export default App
