import React from 'react'
import SearchBar from './SearchBar';

class Header extends React.Component {

    render(){
        const {setOutputArray} =this.props;
        return(

            <div className="ui  menu">
                <div className="item"><i className="icon phone big square"/>Contact book</div>
                <SearchBar
                    setOutputArray={setOutputArray}
                />
            </div>
        );
    }
}


export default Header;