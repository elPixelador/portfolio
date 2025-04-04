import * as React from 'react'
import { Heading } from './App'

const ContentSection: React.FunctionComponent<{
    children?: React.ReactNode
    title: string
}> = (props) => {
    const { children, title } = props
    return (
        <div style={{ paddingTop: 30, paddingBottom: 30 }}>
            <Heading style={{ textAlign: 'center' }}>{title}</Heading>
            {children}
        </div>
    )
}

export default ContentSection
