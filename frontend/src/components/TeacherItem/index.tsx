import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import './styles.css'

export interface Teacher {
    subject: string;
    cost: number;
    id: number;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}

interface TeacherItemProps {
    teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        });
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.name} />
                <div>
                    <strong>{teacher.name}</strong>
                    <span>{teacher.subject}</span>
                </div>
            </header>

            <p>
                {teacher.bio}
            </p>

            <footer>
                <p>
                    Price/hour
                    <strong>{teacher.cost}</strong>
                </p>
                <a
                    target='_blank'
                    rel="noopener noreferrer"
                    href={`https://wa.me/${teacher.whatsapp}`}
                    onClick={createNewConnection}
                >
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Get in touch
                </a>
            </footer>
        </article>
    );
}

export default TeacherItem;