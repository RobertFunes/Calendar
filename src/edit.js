import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx"
import Save from "./save"
import "./edit.css"




class Edit extends React.Component {
    constructor(props){
        super(props);
        this.state={
            form:"uncompleted" ,
            name: "",
            kind: "Primera vez",
            number: "",
            date:"",
            note: ""
        }};  
    onClick=()=>{
        console.log("click");
        this.setState({form:"saving"});
        let promesa=new Promise((response,reject)=>{
            if(this.state.name===""){
                reject("name error");
            }else if(this.state.number===""){
                reject("number error");
            }else if(this.state.date===""){
                reject("date error");
            }else{response("form completed")}
        });
        promesa.then((response)=>{this.setState({form:"saving"});}).catch((error)=>{
            this.setState({form:"error"});
            
        });
        
    } 


    setName=(e)=>{
        this.setState({name:e});
        
    }
    setKind=(e)=>{
        this.setState({kind:e.target.value});
        
    }
    setNumber=(e)=>{
        this.setState({number:e});
        
    }
    setDate=(e)=>{
        this.setState({date:e.target.value  });
        
    }
    setNote=(e)=>{
        this.setState({note:e});
    }


    render(){
        return(
            <div>
                <NavBar></NavBar>
                <form className="form">
                    <h3>Nombre y apellido: </h3>
                    <input type="text" autoComplete="off" onChange={(e)=>{this.setName(e.target.value)}}></input>
                    <h3>Tipo: </h3>
                    <select onChange={(e)=>this.setKind(e)}>
                        <option>Primera vez</option>
                        <option>Subsecuente</option>
                        <option>A domicilio</option>
                        <option>Otro</option>
                    </select>
                    <h3>📱 Número:</h3>
                    <input type="number" onChange={(e)=>{this.setNumber(e.target.value)}}></input>

                    <h3>📅Fecha y hora:</h3>
                    <input type="datetime-local" onChange={(e)=>{this.setDate(e)}}></input>
                    <h3>📓Nota</h3>
                    <textarea type="text" className="notes" onChange={(e)=>{this.setNote(e.target.value)}}></textarea>
                </form>
                <div className="button">    
                    <Save name={this.state.name} kind={this.state.kind} number={this.state.number} date={this.state.date} note={this.state.note} form={this.state.form}></Save>
                </div> 
                <div>       
                    
                </div>
            </div>
        );
    }

}
export default Edit;

