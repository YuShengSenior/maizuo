import React, { Component } from 'react';

class Tabbar extends Component {
    state={
        tabbarlist:[{id:'01',name:'电影'},{id:'02',name:'影院'},{id:'03',name:'我的'}]
    }
    render() {
        return (
            <div>
                <ul>

                {
                    this.state.tabbarlist.map(i=>
                    <li key={i.id}>{i.name}</li>
                        )
                    }
                    </ul>
            </div>
        );
    }
}

export default Tabbar;