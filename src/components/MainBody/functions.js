import React from 'react'

let checkDataInput = (inputs, outputs) => {
    Array.from(outputs).forEach(el => el.style.display='none');
    let result = false;
    if(inputs[0].value===''){
        outputs[0].style.display = "block";
        result = true;
    }
    if (inputs[1].value===''){
        outputs[1].style.display = "block";
        result = true;
    }
    if (inputs[2].value===''){
        outputs[2].style.display = "block";
        result = true;
    }else if(inputs[2].value) {
        let num = inputs[2].value.split('-');
        for (let i = 0; i < num.length; i++) {
            for (let j = 0; j < num[i].length; j++) {
                if (num[i][j] === ' ') {
                    outputs[3].style.display = "block";
                    result = true;
                }
            }
        }
        if (!result) {
            if ((num[0].length !== 3) || (num[1].length !== 3) || (num[2].length !== 2) || (num[3].length !== 2)) {
                outputs[3].style.display = "block";
                result = true;
            }
        }
    }
    if(inputs[3].value===''){
        outputs[4].style.display = "block";
        result = true;
    }else if(inputs[3].value){
        let email = inputs[3].value.split('@');
        if((email.length !==2)){
            outputs[5].style.display = "block";
            result = true;
        }
        if(!result){
            let tag = email[1].split('.');
            if(tag.length!==2){
                outputs[5].style.display = "block";
                result = true;
            }
        }
    }
    if(inputs[5].value===''){
        outputs[6].style.display = "block";
        result = true;
    }


    if(!result){
        return result;}
};

let clearInputs = (inputs) => {
    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
    inputs[3].value = '';
    inputs[4].value = '';
    inputs[5].value = '';
};

let renderCardList = (arr, inputs) => {
    return(
        arr.slice(0).reverse().map((el) => {
            return(
                <div className="ui card" key={el.id}>
                    <div className="image">
                        <img src={el.avatar} alt="/"/>
                    </div>
                    <div className="content">
                        <a className="header">{`${el.firstName} ${el.secondName}`}</a>
                        <div className="description">
                            <p className='ui text'>Number: {el.number}</p>
                            <p className='ui text'>Company: {el.company}</p>
                            <p className='ui text'>E-mail: {el.email}</p>
                        </div>
                    </div>
                    <div className="ui buttons">
                        <button className="ui button blue inverted"
                                onClick={  () => {
                                    this.props.changeEditMode(true);
                                    this.setState({editedContact: el});
                                    inputs[0].value = el.firstName;
                                    inputs[1].value = el.secondName;
                                    inputs[2].value = el.number;
                                    inputs[3].value = el.email;
                                    inputs[4].value = el.company;
                                    inputs[5].value = el.avatar;
                                }}
                        ><i className="icon edit outline"/></button>
                        <div className="or"/>
                        <button className="ui button red inverted" onClick={() => {
                            this.props.deleteContact(el.id);
                            this.setState({editedContact: {id: 0, number: "", firstName: "", secondName: "", company:  "-",email: "", avatar: ""}})
                        }}>
                            <i className="icon trash alternate outline"/>
                        </button>
                    </div>
                </div>
            );
        })
    );
};

export {checkDataInput, clearInputs, renderCardList}