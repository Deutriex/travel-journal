import React from "react";

class Entry extends React.Component {
    formatDate(date_obj){
        var methods = ["getFullYear", "getMonth", "getDate"]
        return methods.map((x,i) => ("" + (date_obj[x]()+i%2)).padStart(2, "0")).join("-")
    }

    render(){
        var styling = {
            backgroundImage: `url('/images/${this.props.image}')`
        }

        return (
            <section>
                <div className="image" style={styling}></div>
                <div className="data">
                    <span className="place">{this.props.country}</span> <a href={this.props.gMapsLink} target="_blank">View on Google Maps</a>
                    <h2>{this.props.landmark}</h2>
                    <p><b>{this.formatDate(this.props.date.start)}</b> - <b>{this.formatDate(this.props.date.end)}</b></p>
                    <p>{this.props.description}</p>
                </div>                    
            </section>
        )
    }
}

export default Entry;