package com.auth.notes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/notes")
public class NotesController {
 
	@Autowired
	private NotesService notesService;
	@PostMapping
    public Notes createNotes(@RequestBody Notes notes) {
        return notesService.createNotes(notes);
    }

    @GetMapping("/{id}")
    public Notes getNotes(@PathVariable Long id) {
        return notesService.getNotesById(id);
    }

    @GetMapping
    public List<Notes> getAllNotes() {
        return notesService.getNotess();
    }

    @PutMapping("/{id}")
    public Notes updateUser(@PathVariable Long id, @RequestBody Notes notes) {
        return notesService.updateNotes(id, notes);
    }

    @DeleteMapping("/{id}")
    public String deleteNotes(@PathVariable Long id) {
    	notesService.deleteNotes(id);
        return "Notes deleted successfully.";
    }
}
