import * as React from 'react'

import './styles.scss'

export interface ElementDetails {
    name: string;
    href: string;
    src: string;
}

export interface EmployerListPublicProps {
    elements: ElementDetails[]
    size: 'small' | 'standard'
}

export class ElementList extends React.Component<EmployerListPublicProps> {

    render() {
        return (
            <div className={`element-list ${this.props.size}`}>
                {this.props.elements.map(element => this.renderElement(element))}
            </div>
        );
    }

    private renderElement(details: ElementDetails): React.ReactNode {
        return (
            <a key={details.href} href={details.href} target="_blank">
                <img src={details.src} alt={details.name} />
            </a>
        );
    }
}