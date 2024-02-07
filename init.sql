-- create la table
CREATE TABLE entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dallas TEXT,
    houston TEXT,
    san_antonio TEXT,
    entry_datetime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- some random entries
-- INSERT 1
INSERT INTO entries (dallas, houston, san_antonio, entry_datetime)
VALUES ('Lorem ipsum dolor sit amet.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Ut enim ad minim veniam.', '2023-03-01 08:15:00'),
('Consectetur adipiscing elit.', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', '2023-03-02 10:30:00'),
('Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', '2023-03-03 12:45:00'),
('Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-03-04 15:00:00'),
('Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '2023-03-05 17:15:00');
