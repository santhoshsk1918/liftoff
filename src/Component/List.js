    import React, { useState} from 'react';
    import {useFormik} from 'formik';
    import {Container, Form} from "react-bootstrap";
    import FriendsList from "./FriendsList";

    import axios from 'axios';

    const List = () => {
        let [list, setList] = useState([])
        let [initStr, setSt] = useState("Please Enter Screen Names");
        let [loading, setLoading] = useState(false);
        const formik = useFormik({
            initialValues: {
                screenName1: '',
                screenName2: ''
            },
            onSubmit: values => {
                let screenName1 = values.screenName1;
                let screenName2 = values.screenName2
                if(screenName2.trim() === "" || screenName1.trim() === ""){
                    alert("Please Enter Fields");
                }else {
                    setLoading(true);
                    axios.get(`/getMutualFriends?screenName1=${screenName1}&screenName2=${screenName2}`)
                        .then((resp) => {
                            console.log(resp.data);
                            setSt("No Mutual Friends");
                            setLoading(false);
                            setList(resp.data);
                        }).catch((err) => {
                        console.error(err);
                    })
                }
            },
        })


        return (

            <Container>
                {(loading === false)
                    ?
                    <React.Fragment>
                    <form onSubmit={formik.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="screenName1">Screen Name One</Form.Label>
                            <Form.Control
                                id="screenName1"
                                name="screenName1"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.screenName1}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="screenName2">Screen Name One</Form.Label>
                            <Form.Control
                                id="screenName2"
                                name="screenName2"
                                type="text"
                                onChange={formik.handleChange}
                                value={formik.values.screenName2}
                            />
                        </Form.Group>
                        <button type="submit" className={'btn btn-primary'}>Submit</button>
                    </form>

                    <br/>

                {(list.length === 0) ?  <h3>{initStr}</h3> : <FriendsList friendList={list} />}
                    </React.Fragment>
                    :
                    <h3>Fetching Results ....</h3>
                }
            </Container>

        );

    };

    export default List;