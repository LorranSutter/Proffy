import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="It is awesome you want to teach."
                description="First step you fill this register form"
            />

            <main>
                <fieldset>
                    <legend>Your info</legend>

                    <Input name="name" label="Full name" />
                    <Input name="avatar" label="Avatar" />
                    <Input name="whatsapp" label="Whatsapp" />

                </fieldset>

                <fieldset>
                    <legend>About your class</legend>

                    <Input name="subject" label="Subject" />
                    <Input name="cost" label="Class hour cost" />

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important" />
                        Important! <br />
                        Fill all fields!
                    </p>
                    <button type="button">Save</button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;