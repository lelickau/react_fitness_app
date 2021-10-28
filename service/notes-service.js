const ApiError = require("../exeptions/api-error");
const Note = require('../models/Note');


class NotesService {

    async createNote(title, description, marking, status, userId) {

        if (!title || !marking || !status || !userId) {
            throw ApiError.BadRequest('Fill in the field');
        }

        const note = await new Note({
            title,
            description,
            marking,
            status,
            owner: userId,
            completed: false,
            important: false,
        });
        await note.save();

        return note;
    }

    async getAllNotes(userId) {
        const notes = await Note.find({owner: userId});
        return notes;
    }

    async deleteNote(userId, noteId) {
        const note = await Note.findOne({_id: noteId, owner: userId});

        if (!note) {
            throw ApiError.BadRequest('Error trying to delete. File not found.');
        }

        await note.remove()

    }

    //

    async editNote(noteId, noteEditData) {
        const note = await Note.findByIdAndUpdate({_id: noteId}, noteEditData);

        if (!note) {
            throw ApiError.BadRequest('Error trying to delete. File not found.');
        }
        await note.save();
        return note;
    }
}

module.exports = new NotesService();
