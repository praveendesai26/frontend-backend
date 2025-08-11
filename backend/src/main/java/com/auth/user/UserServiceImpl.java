package com.auth.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
    private UserRepository userRepository;

    @Override
    public User createUser(User user) {
    	// TODO Auto-generated method stub
        if (!user.getPassword().equals(user.getConfirmPassword())) {
            throw new RuntimeException("Password and Confirm Password do not match");
        }
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
    	// TODO Auto-generated method stub
        return userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public List<User> getAllUsers() {
    	// TODO Auto-generated method stub
        return userRepository.findAll();
    }

    @Override
    public User updateUser(Long id, User user) {
    	// TODO Auto-generated method stub
        User existing = getUserById(id);
        existing.setUserName(user.getUserName());
        existing.setEmail(user.getEmail());
        existing.setPassword(user.getPassword());
        return userRepository.save(existing);
    }

    @Override
    public void deleteUser(Long id) {
    	// TODO Auto-generated method stub
        userRepository.deleteById(id);
    }
}
