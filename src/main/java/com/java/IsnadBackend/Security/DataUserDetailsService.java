package com.java.IsnadBackend.Security;


import com.java.IsnadBackend.Models.Roles;
import com.java.IsnadBackend.Models.UserEntity;
import com.java.IsnadBackend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class DataUserDetailsService implements UserDetailsService {
    private UserRepository userRepository;
    @Autowired
    public DataUserDetailsService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user= userRepository.findByEmail(username).orElseThrow(()
                ->new UsernameNotFoundException("Username does not exist"));
              return new User(user.getUsername(),user.getPassword(),mapRolesToAuthorities(user.getRoles()));

    }
    private Collection<GrantedAuthority> mapRolesToAuthorities(List<Roles> roles){
       return roles.stream().map(role-> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }
}
