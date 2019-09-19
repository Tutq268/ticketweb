import React, { Component } from 'react'

export default class StepOrder extends Component {
    render() {
        return (
            <div className="col-md-12 processBook">
                    <table className="col-md-12">
                        <tbody><tr>
                            <td>
                            <p style={{color: `${this.props.color1}`}}>Chọn Vé</p>
                            </td>
                            <td>
                            <img src="./../images/icon-step.png" alt=""/>
                            <p style={{color: `${this.props.color2}`}}>Thông Tin</p>
                            </td>
                            <td>
                            <img src="./../images/icon-step.png" alt=""/>
                            <p style={{color: `${this.props.color3}`}}> Hoàn Tất</p>
                            </td>
                        </tr>
                        </tbody></table>
                    </div>
        )
    }
}
