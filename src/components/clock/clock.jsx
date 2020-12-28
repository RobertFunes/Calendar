import React from "react";
import "./clock.css";

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state={
            day: "",
            month : "" ,
            year:"",
            dayname:"",
            activities: this.props.activities,
        };
        
    }
    componentDidMount(){
        var time= this.props.time;
        this.dateTransalte(time);
    }
    dateTransalte=(date)=>{
        const months= [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ];
        const days =[
            "Domingo",
            "Lunes",
            "Martes",
            "Miércoles",
            "Jueves",
            "Viernes",
            "Sábado",
        ];
        this.setState({
            month: months[date.getMonth()],
            day: date.getDate(),
            year : date.getFullYear(),
            dayname:days[date.getDay()]
        });
    }

    handleActivitiesCounter(){
        if(this.state.activities===1){
            return("Una actividad.")
        }else{
            return(this.state.activities+" actividades.")
        }
    }

    renderImage(){
        
        if(Math.round(Math.random() * (2 - 1) + 1)===1){
            if(this.state.activities===0){
                return <img className="image" src="https://image.freepik.com/free-vector/cute-koala-sleeping-icon-illustration-flat-cartoon-style_138676-1232.jpg"></img>    
            }
        }else{
            if(this.state.activities===0){
                return <img className="image" src="https://media1.tenor.com/images/40090305ab69b92d82dbd57615750a8e/tenor.gif"></img>
            }
        }
    }
    render(){
        return(
            <React.Fragment>
                <center>
                    <h4>{this.state.dayname}, {this.state.month} {this.state.day} del {this.state.year} </h4>
                    <h5>{this.handleActivitiesCounter()}</h5>
                </center>
                <center>

                    {this.renderImage()}
                </center>
            </React.Fragment>
        );
    }

}

export default Clock;