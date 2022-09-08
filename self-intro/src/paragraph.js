import React, {Fragment} from 'react';

function Paragraph (props) {
    if (props.topic === 'About me') {
        return (
            <Fragment>
                <p>Hello, my name is Jack and I'm a third-year computer science student at UTM.</p>
                <p>Here you can navigate to my resume and github dashboard. If you wish to contact</p>
                <p>me, please go under Contact me. </p>
            </Fragment>
        )
    }
    else if (props.topic === "Contact me") {
        return (
            <Fragment>
                <p>Phone number: +1 778-885-6219</p>
                <p>Email address: jackyangxinyue@gmail.com</p>
            </Fragment>
        )
    }
}



export default Paragraph;