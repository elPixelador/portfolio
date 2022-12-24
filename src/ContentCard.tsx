import * as React from 'react'

const ContentSection: React.FunctionComponent<{
    children?: React.ReactNode
    title: string
}> = (props) => {
    const { children, title } = props
    return (
        <div>
            <h4>{title}</h4>
            {children}
        </div>
    )
}

export default ContentSection
