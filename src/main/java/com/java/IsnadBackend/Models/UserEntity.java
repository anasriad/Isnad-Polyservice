package com.java.IsnadBackend.Models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@Entity
@Table(name = "users")
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@NoArgsConstructor
@Getter
@Setter
public class UserEntity {
@Id @GeneratedValue(strategy = GenerationType.SEQUENCE)
    long id;
    private String Username;
    private String email;
    private String password;
    private String Oauth2provider;
    private String Oauth2_id;
    private String access_token;
    private String refresh_token;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private LinkedList<Service> services=new LinkedList<>();
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "user_roles",joinColumns = @JoinColumn(name = "user_id",referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "role_id",referencedColumnName = "id"))
    private List<Roles> roles= new ArrayList<Roles>();

}
