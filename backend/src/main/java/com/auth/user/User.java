package com.auth.user;

import java.util.Date;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="user_id")
    private Long id;
    @Column(name="user_name")
    private String userName;
    @Column(name="user_email")
    private String email;
    
    private String password;

    @Transient
    private String confirmPassword;
    @Column(name="last_update")
    private Date lastUpdate;
    
    @Column(name="Created_on")
    private Date CreatedOn;
}
