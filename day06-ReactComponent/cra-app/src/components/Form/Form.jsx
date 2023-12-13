import React from 'react';
import Control from './Control';
import Paragraph from './Paragraph';
import Button from './Button';

function Form() {
    return (
        <div>
            <form>
                <Control type="text" lable="Email" />
                <br />
                <Control type="password" lable="Password" />
                <Control type="checkbox" lable="Hobby" />
                <Paragraph>
                    Ea commodo veniam ex enim laboris cillum occaecat nisi. Mollit adipisicing magna ut adipisicing et
                    aliqua do voluptate pariatur. Laborum quis Lorem elit ex mollit eiusmod ad culpa officia.
                </Paragraph>
                <Button type="button">Register</Button>
                <Button href="https://google.com">Go to google</Button>
            </form>
        </div>
    );
}

export default Form;
