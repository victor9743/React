import { Component } from "react";
import './styles.css';

export class Button extends Component {
    render() {
        const { texto, evento, disabled} = this.props;

        return  (
            <button 
                disabled={disabled}
                className="button" 
                onClick={evento}
            >
                {texto}
            </button>
        )
    }
}