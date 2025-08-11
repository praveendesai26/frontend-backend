package com.auth.notes;

import java.util.Date;

import com.auth.user.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Transient;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Notes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notes {
	 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="note_id")
    private Long id;
    @Column(name="note_title")
    private String noteTitle;
    @Column(name="note_content")
    private String noteContent;
    
  
    @Column(name="last_update")
    private Date lastUpdate;
    
    @Column(name="Created_on")
    private Date CreatedOn;
}
