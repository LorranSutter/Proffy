import { Request, Response } from 'express';

import db from "../db/connection";
import hourToMinutes from "../utils/hourToMinutes";

interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

export default class ClassesController {

    async index(req: Request, res: Response) {
        const filters = req.query;

        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;

        if (!week_day || !subject || !time) {
            return res.status(400).json({
                error: 'Missing filters to search classes.'
            })
        }

        const timeInMinutes = hourToMinutes(time);
        const classes = await db('classes')
            .whereExists(function () {
                this.select('class_schedule.*')
                    .from('class_schedule')
                    .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                    .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                    .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                    .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
            })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return res.json(classes);
    }

    async create(req: Request, res: Response) {
        const { name, avatar, whatsapp, bio, subject, cost, schedule } = req.body;

        const tx = await db.transaction();

        try {
            const insertedUserId = await tx('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });

            const user_id = insertedUserId[0];

            const insertedClassesId = await tx('classes').insert({
                subject,
                cost,
                user_id
            });

            const class_id = insertedClassesId[0];
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: hourToMinutes(scheduleItem.from),
                    to: hourToMinutes(scheduleItem.to),
                }
            });

            await tx('class_schedule').insert(classSchedule);

            await tx.commit();

            return res.status(201).send();
        } catch (err) {
            await tx.rollback();
            return res.status(400).json({
                error: 'Unexpected error while creating a new class'
            })
        }
    }
}