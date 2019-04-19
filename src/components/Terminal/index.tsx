import * as React from 'react';
import * as XTerm from 'xterm';

import './xterm.scss';

export class Terminal extends React.Component {

    private terminal = new XTerm.Terminal({ cursorBlink: true });
    private lineBuffer: string = '';

    public render() {
        return <div className="terminal" ref={(r)=>this.buildTerminal(r)} />;
    }

    private buildTerminal(domRef: HTMLElement | null) {

        if (!domRef) {
            throw new Error('Ref was not passed!');
        } 

        this.terminal.open(domRef);

        this.terminal.writeln('Welcome to my portfolio');
        this.terminal.writeln('There\'s some hidden functionality here. See if you can figure it out.');
        this.terminal.writeln('No cheating!');
        this.prompt();

        this.terminal.on('key', (key, ev) => {
            const printable = !ev.altKey && !ev.ctrlKey && !ev.metaKey;
            if (ev.keyCode === 13) {
                if (this.lineBuffer.length > 0) {
                    this.processCommand(this.lineBuffer);
                }
                this.lineBuffer = '';
                this.prompt();
            } else if (ev.keyCode === 8) {
                if (this.lineBuffer.length === 0) { return; }
                this.lineBuffer = this.lineBuffer.substring(0, this.lineBuffer.length - 1);
                this.terminal.write('\b \b');
            } else if (printable) {
                this.lineBuffer = this.lineBuffer.concat(key);
                this.terminal.write(key);
            }
        });
    }

    private prompt() {
        this.terminal.write('\r\n$ ');
    };

    private processCommand(command: string) {
        switch (command) {
            case 'clear':
                this.terminal.clear();
                break;
            default:
                this.terminal.write('\r\n\n');
                this.printMessage('Unrecognized Command: ' + command);
        }
    }

    private printMessage(message: string) {
        this.terminal.writeln('  ' + message);
    }
}