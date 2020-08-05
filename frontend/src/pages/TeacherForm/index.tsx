import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

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
                    <Textarea name="bio" label="Biography" />

                </fieldset>

                <fieldset>
                    <legend>About your class</legend>

                    <Select
                        name="subject"
                        label="Subject"
                        options={[
                            { value: 'Arts', label: 'Arts' },
                            { value: 'Biology', label: 'Biology' },
                            { value: 'Chemistry', label: 'Chemistry' },
                            { value: 'English', label: 'English' },
                            { value: 'Geography', label: 'Geography' },
                            { value: 'History', label: 'History' },
                            { value: 'Mathematics', label: 'Mathematics' },
                            { value: 'Physics', label: 'Physics' }
                        ]}
                    />
                    <Input name="cost" label="Class hour cost" />

                </fieldset>

                <fieldset>
                    <legend>
                        Available times
                        <button type="button">+ New time</button>
                    </legend>

                    <div className="schedule-item">
                        <Select
                            name="subject"
                            label="Subject"
                            options={[
                                { value: 'Arts', label: 'Arts' },
                                { value: 'Biology', label: 'Biology' },
                                { value: 'Chemistry', label: 'Chemistry' },
                                { value: 'English', label: 'English' },
                                { value: 'Geography', label: 'Geography' },
                                { value: 'History', label: 'History' },
                                { value: 'Mathematics', label: 'Mathematics' },
                                { value: 'Physics', label: 'Physics' }
                            ]}
                        />
                        <Input name="from" label="From" type="time" />
                        <Input name="to" label="To" type="time" />
                    </div>

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