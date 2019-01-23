import React from 'react'
import {connect} from "react-redux";

class Header extends React.Component {

    render(){
        const {contacts, setOutputArray} =this.props;
        let searchContacts=[];
        return(

            <div className="ui  menu">
                <div className="item"><i className="icon phone big square"/>Contact book</div>
                <div className="right menu">
                    <div className="item">
                        <div className="ui transparent icon input">
                            <input id="search" type="text" placeholder="Search..." onChange={(e) => {
                                if(e.target.value===''){
                                    searchContacts=[];
                                    document.getElementById('search').value='';
                                    setOutputArray(searchContacts);
                                }
                            }}/>
                            <div className="icons">
                                <i className="ui icon close large link" onClick={()=>{
                                    searchContacts=[];
                                    document.getElementById('search').value='';
                                    setOutputArray(searchContacts);
                                }}/>
                                <i className="search link large icon" onClick={ async(e) => {
                                    searchContacts=[];
                                    let search = document.getElementById('search').value.toLowerCase();
                                    if(search) {
                                        contacts.map( (el) => {
                                            let fullName = `${el.firstName} ${el.secondName}`.toLowerCase();
                                            if (fullName.indexOf(search) > -1) {
                                                searchContacts.push(el);
                                            }
                                        });
                                        await setOutputArray(searchContacts);
                                        if(searchContacts.length===0){alert("No users were found.")}
                                    }else{
                                        setOutputArray(searchContacts);
                                    }
                                }}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const putStateToProps = (state) => {
    return{
        contacts: state.contacts
    }
};

export default connect(putStateToProps)(Header);