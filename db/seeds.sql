
USE user_db;


INSERT INTO user (username, email, password) VALUES ('FirstUser', 'wegotthis@gmail.com', 'password1');


SET @userId = LAST_INSERT_ID();

-- Insert a post associated with the user
INSERT INTO post (title, body, userId, createdAt, updatedAt) VALUES ('First Post', 'This is the content of the first post.', @userId, NOW(), NOW());