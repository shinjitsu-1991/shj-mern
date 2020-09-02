import React, {useContext, useState} from "react";
import {useHttp} from "../../hooks/http.hook";
import {AuthContext} from "../../context/AuthContext";
import {useHistory} from 'react-router-dom'

const LinkCreate = () => {
    const history = useHistory();
    const [link, setLink] = useState('');
    const {request} = useHttp();
    const auth = useContext(AuthContext);

    const pressHandler = async event => {
        if(event.key === 'Enter') {
            try{
                const data = await request('/api/link/generate', 'POST', {from: link},
                    {Authorization: `Bearer ${auth.token}`});
                history.push(`/detail/${data.link._id}`)
            } catch (e){}
        }
    }

    return(
        <div className="row">
            <div className="col s8 offset-s2">
                <div className="input-field">
                    <input
                        onChange={e => setLink(e.target.value)}
                        type="text"
                        id="link"
                        onKeyPress={pressHandler}
                        value={link}
                    />
                    <label htmlFor="link">Enter link</label>
                </div>
            </div>
        </div>
    );
}

export default LinkCreate;