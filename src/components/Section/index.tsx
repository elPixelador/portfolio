import * as React from 'react'

export interface SectionPublicProps {
    title: string
}

export class Section extends React.Component<SectionPublicProps> {
    render() {
        return (
            <div className="section">
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        );
    }
}