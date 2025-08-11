package com.auth.notes;

import java.util.List;


public interface NotesService {
	Notes createNotes(Notes notes);
	Notes getNotesById(Long id);
    List<Notes> getNotess();
    Notes updateNotes(Long id, Notes notes);
    void deleteNotes(Long id);
}
