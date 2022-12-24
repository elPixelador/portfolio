import React from 'react'
import ContentSection from './ContentCard'
import {
    contributions,
    employers,
    mediaLinks,
    projects,
} from './PortfolioContent'

import ElementList from './ElementList'

const App: React.FunctionComponent = () => {
    return (
        <div>
            <img
                src="https://avatars3.githubusercontent.com/u/7558040"
                alt="a portrait of liam"
            />
            <p>Liam Parker</p>
            <p>
                I am a <b>software developer</b> based in Melbourne, Australia.
                I currently work at <b>Spiff</b>, an exciting tech startup in
                Docklands. We're working on a cloud based product
                personalization platform.
            </p>
            <ContentSection title="Employment History">
                <ElementList elements={employers} />
            </ContentSection>
            <ContentSection title="Personal Projects">
                <ElementList elements={projects} />
            </ContentSection>
            <ContentSection title="Open Source">
                <ElementList elements={contributions} />
            </ContentSection>
            <ContentSection title="Social Media">
                <ElementList elements={mediaLinks} />
            </ContentSection>
            <footer>
                <p>
                    Made with ❤️ - &copy; Copyright 2015 -{' '}
                    {new Date().getFullYear()}, Liam Parker
                </p>
            </footer>
        </div>
    )
}

export default App
