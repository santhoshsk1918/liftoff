import React from 'react';
import Friend from "./Friend";
import {Row} from "react-bootstrap"

const FriendsList = (props) => {
    let {friendList} = props
    return (
        <React.Fragment>
            <h3>Mutual Friends</h3>
            <Row>
                {friendList.map((item) => <Friend key={item.id} value={item} />)}
            </Row>
        </React.Fragment>
    );
};

export default FriendsList;