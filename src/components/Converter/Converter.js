import {Component} from 'react'



class Converter extends Component {

    constructor() {
        super()

        this.state = {
            result: 0.00
        }
    }

    convertValue = () => {
        let degrees = document.querySelector("#degrees").value;
        let type = document.querySelector("#types").value;
        let result = 0;

        switch (type) {
            case "Fahrenheit":
                result = ((degrees - 32) / 1.8).toFixed(3);
                break;
            case "Kelvin":
                result = ((degrees - 273.15)).toFixed(3);
                break;
            default:
                result = "Invalid"
                break;
        }
        

        this.setState({result: result})
    }

    render() {
        return (
            <div className = "converter">
                <div className = "container">
                    <div className="row">
                        <div className = "input degreesWrap">
                            <label htmlFor="degrees">Degrees</label>
                            <input id = "degrees" className = "form-control" name="degrees" placeholder="0" type="number" />
                        </div>
                        <div className = "input typeWrap">
                            <label htmlFor="types">Type</label>
                            <select id = "types"  className = "form-control" name="types">
                                <option value="Fahrenheit">Fahrenheit</option>
                                <option value="Kelvin">Kelvin</option>
                            </select>
                        </div>

                        <button id = "convert" className="btn btn-danger" onClick={this.convertValue}>Convert</button>    
                    </div>
                    <div className= "row">
                        <div className = "resultWrap">
                            <label htmlFor="result">Result</label>
                            <h3 id = "result">{this.state.result}</h3>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default Converter