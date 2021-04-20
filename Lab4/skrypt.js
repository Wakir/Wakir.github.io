"use strict"
function hashCode(str){
    let hash=0;
    if (str.length == 0) return hash;
    for (let i = 0; i < str.length; i++){
        let char = str.charCodeAt(i);
        hash = ((hash << 5)- hash) + char;
        hash = hash & hash;
    }
    return hash;
}
const TitleTinder = () =>{
    return <h1>Tinder do projektów</h1>
}
const WorkerItem = (props) =>{
    return(
    <li className="list-group-item">
        <div><p>{props.text.name} ({props.text.mail})</p></div>
        <div>{props.text.description}</div>
    </li>)
}
const WorkerForm = (props) =>{
    const {valName, valMail, valDescription, funcOnChange, funcOnClick} = props
    return(
        <>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="newWorkerName">Imie i nazwisko studenta:</label>
                <input type="text" 
                className="form-control"
                name="name" 
                id="newWorkerName" 
                placeholder="Imie i Nazwisko" 
                value={valName}
                onChange={funcOnChange}>
                </input>
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="newWorkerMail">Mail studenta:</label>
                <input type="mail" 
                className="form-control"
                name="mail" 
                id="newWorkerMail" 
                placeholder="Mail" 
                value={valMail}
                onChange={funcOnChange}>
                </input>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="newWorkerDescription">Opis studenta:</label>
                <input className="form-control"
                name="description" 
                id="newWorkerDescription" 
                row="3" 
                value={valDescription}
                onChange={funcOnChange}>
                </input>
            </div>
            <button className="btn btn-primary"  onClick={funcOnClick}>Utwórz nowego studenta</button>
        </>
    )
}
class WorkerList extends React.Component{
    state ={
        workerList:[ {name:"Maciej Błoński",
        mail:"maciej.blonski@cosiek.pl",
        description:"Programista z 5 letnim doświadczeniem"
        },
        {name:"Kamil Szewczyk",
        mail:"kamil.szewczyk@cosiek.pl",
        description:"Programista z 10 letnim doświadczeniem"
        },
        {name:"Stanisław Kozłowski",
        mail:"stanislaw.kozlowski@cosiek.pl",
        description:"Programista z 8 letnim doświadczeniem"
        },
        {name:"Kasia Kowalska",
        mail:"kasia.kowalska@cosiek.pl",
        description:"Programistka z 10 letnim doświadczeniem"
        },
        ],
        newWorker:{
            name:"",
            mail:"",
            description:""
        },
        showWarning1: false,
        showWarning2: false
    }
    errorInput1="Podaj inny adres Email";
    errorInput2="Potrzebny jest email";
    handleInputChange= (event) =>{
        let newName=this.state.newWorker.name;
        let newMail=this.state.newWorker.mail;
        let newDecription=this.state.newWorker.description;
        if(event.target.name=="name") newName=event.target.value;
        else if (event.target.name=="mail")  newMail=event.target.value;
        else if(event.target.name=="description") newDecription=event.target.value;
        this.setState({
            newWorker:{
                name: newName,
                mail: newMail,
                description: newDecription
            }
        });
    }
    handleClick= (event) =>{
        for(let i =0; i< this.state.workerList.length;i++){
            if (this.state.workerList[i].mail.localeCompare(this.state.newWorker.mail)===0){
                this.setState({
                    showWarning1: true,
                    showWarning2: false
                })
                return
            }
        }
        if (this.state.newWorker.mail===""){
            this.setState({
                showWarning1: false,
                showWarning2: true
            })
        }
        else {
            this.setState({
                workerList: this.state.workerList.concat(({
                    name: this.state.newWorker.name,
                    mail: this.state.newWorker.mail,
                    description: this.state.newWorker.description
                })),
                newWorker:{
                    name:"",
                    mail:"",
                    description:""
                },
                showWarning1: false,
                showWarning2: false
            })
        }
    }
    render() {
        const listRender=this.state.workerList.map((it) => (
            <WorkerItem key={hashCode(it.mail)} text={it}/>
        ))
        return (
            <>
            <WorkerForm
            valName={this.state.newWorker.name}
            valMail={this.state.newWorker.mail}
            valDescription={this.state.newWorker.description}
            funcOnChange={this.handleInputChange}
            funcOnClick={this.handleClick}
            />
            {this.state.showWarning1 && <h1 style={{color:"red"}}>{this.errorInput1}</h1>}
            {this.state.showWarning2 && <h1 style={{color:"red"}}>{this.errorInput2}</h1>}
            <ul>{listRender}</ul>
            </>
        );
    }
}

ReactDOM.render(
    <>
    <TitleTinder/>,
    <WorkerList/>,
    </>,
    document.getElementById('root')
)