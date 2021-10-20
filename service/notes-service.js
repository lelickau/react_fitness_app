const ApiError = require("../exeptions/api-error");
const Note = require('../models/Note');


class NotesService {

    async createNote(title, marking, status, userId) {

        if (!title || !marking || !status || !userId) {
            throw ApiError.BadRequest('Fill in all fields');
        }

        const note = await new Note({
            title,
            marking,
            status,
            owner: userId,
            completed: false,
            important: false,
        });
        await note.save();
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

    async getNote() {

    }
}

module.exports = new NotesService();


// router.get('/:id', auth, async (req, res) => {
//     try {
//         const note = await Note.findById(req.params.id);
//         res.json(note);

//     } catch (e) {
//         res.status(500).json({message: 'Something went wrong. Try again.'});
//     }
// });