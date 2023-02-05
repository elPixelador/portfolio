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
        case 'en-US':
            return 'Hello'
        case 'da-DK':
            return 'Halløj'
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
                backgroundColor: '#282828',
                alignItems: 'center',
                maxWidth: isSmall ? '95%' : '1000px',
                margin: '30px auto 30px auto',
                padding: 30,
                borderRadius: 8,
                border: '1px solid #5c5c5c',
            }}
        >
            <img
                style={{ width: 150, borderRadius: 999 }}
                src="https://avatars3.githubusercontent.com/u/7558040"
                alt="a portrait of liam"
            />
            <Heading>{getBrowserLangGreeting()} 👋</Heading>
            <MiniElementList elements={mediaLinks} />
            <div
                style={{
                    maxWidth: isSmall ? '90%' : '60%',
                    textAlign: 'center',
                }}
            >
                <Paragraph>
                    I'm Liam, I'm a{' '}
                    <HighlightedText>software developer</HighlightedText> based
                    in Melbourne, Australia. My fields of interest lie in
                    software architecture, optimization and 3D computer
                    graphics.
                </Paragraph>
            </div>
            <div
                style={{
                    display: 'flex',
                    flexBasis: '20%',
                    flexWrap: 'wrap',
                    width: '100%',
                }}
            >
                <ContentSection title="Employment History">
                    <ElementList elements={employers} />
                </ContentSection>
                <ContentSection title="Personal Projects">
                    <ElementList elements={projects} />
                </ContentSection>
                <ContentSection title="Open Source Contributions">
                    <ElementList elements={contributions} />
                </ContentSection>
            </div>

            <footer>
                <Paragraph>Made with ❤️ by Liam Parker</Paragraph>
            </footer>
        </div>
    )
}

export const Heading: React.FunctionComponent<{
    children?: React.ReactNode
}> = ({ children }) => <h1 style={{ color: 'rgb(231 231 231)' }}>{children}</h1>

export const SubHeading: React.FunctionComponent<{
    children?: React.ReactNode
}> = ({ children }) => <h2 style={{ color: 'rgb(231 231 231)' }}>{children}</h2>

export const Paragraph: React.FunctionComponent<{
    children?: React.ReactNode
}> = ({ children }) => <p style={{ color: 'rgb(231 231 231)' }}>{children}</p>

export const HighlightedText: React.FunctionComponent<{
    children?: React.ReactNode
}> = ({ children }) => <span style={{ fontWeight: 'bold' }}>{children}</span>

export default App
