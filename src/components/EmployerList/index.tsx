import * as React from 'react'

import './styles.scss'

export interface EmployerDetails {
    href: string;
    src: string;
}

export interface EmployerListPublicProps {
    employerList: EmployerDetails[]
}

export class EmployerList extends React.Component<EmployerListPublicProps> {
    render() {
        return (
            <div className="companies">
                {this.props.employerList.map(employer => this.renderEmployer(employer))}
            </div>
        );
    }

    private renderEmployer(details: EmployerDetails): React.ReactNode {
        return (
            <a key={details.href} href={details.href} target="_blank">
                <img src={details.src} />
            </a>
        );
    }
}