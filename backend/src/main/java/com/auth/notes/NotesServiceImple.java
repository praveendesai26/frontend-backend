package com.auth.notes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotesServiceImple implements NotesService {
    @Autowired
	private NotesRepository notesRepository;
	@Override
	public Notes createNotes(Notes notes) {
		// TODO Auto-generated method stub
		return notesRepository.save(notes);
	}

	@Override
	public Notes getNotesById(Long id) {
		// TODO Auto-generated method stub
		 return notesRepository.findById(id).orElseThrow(() -> new RuntimeException("Notes not found"));
	}

	@Override
	public List<Notes> getNotess() {
		// TODO Auto-generated method stub
		return notesRepository.findAll();
	}

	@Override
	public Notes updateNotes(Long id, Notes notes) {
		// TODO Auto-generated method stub
		Notes existing =getNotesById(id);
		existing.setNoteTitle(notes.getNoteTitle());
		existing.setNoteContent(notes.getNoteContent());
		
		return notesRepository.save(existing);
	}

	@Override
	public void deleteNotes(Long id) {
		// TODO Auto-generated method stub
		notesRepository.deleteById(id);
	}

}
