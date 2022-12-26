import * as React from 'react'
import { SubHeading } from './App'

const ContentSection: React.FunctionComponent<{
    children?: React.ReactNode
    title: string
}> = (props) => {
    const { children, title } = props
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <SubHeading>{title}</SubHeading>
            {children}
        </div>
    )
}

export default ContentSection
