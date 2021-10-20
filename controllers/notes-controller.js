const {Router} = require('express');
const notesService = require('../service/notes-service');


class NotesController {
    async createNote(req, res, next) {
        try {
            const {title, marking, status} = req.body;
            const {id} = req.user;

            const noteData = await notesService.createNote(title, marking, status, id);
            return res.json(noteData);

        } catch (err) {
            next(err);
        }
    }

    async getAllNotes(req, res, next) {
        try {
            const {id} = req.user;
            const notesData = await notesService.getAllNotes(id);

            return res.json(notesData);
        } catch (err) {
            next(err);
        }
    }

    async deleteNote(req, res, next) {
            try {
                const userId = req.user.id;
                const  noteId = req.query.id;
                const noteData = await notesService.deleteNote(userId, noteId);

                return res.json(noteData);
            } catch (err) {
                next(err);
            }
        }
    //
    async getNote(req, res, next) {
        try {

        } catch (err) {
            next(err);
        }
    }


}

module.exports = new NotesController();



