SHOW DATABASEs;

USE mental_health_project;

DROP TABLE contact;

CREATE TABLE contact(
	contact_id INT PRIMARY KEY AUTO_INCREMENT,
    f_name VARCHAR(255) NOT NULL,
    l_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone_number INT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE sign_in(
	sign_in_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) unique NOT NULL,
    passwords VARCHAR(255) UNIQUE NOT NULL,
    sign_in_time TIMESTAMP DEFAULT NOW()
);

DROP TABLE sign_in;
DROP TABLE health_score;
CREATE TABLE health_score(
	test_id INT auto_increment,
    foreign key (test_id) references sign_in(sign_in_id),
    depression INT NOT NULL,
    anxiety INT NOT NULL,
    ocd INT NOT NULL,
    bipolar INT NOT NULL,
    s_word INT NOT NULL
);

-- INSERT INTO contact (f_name, l_name, email, password) 
-- VALUES ?

show warnings;

SELECT * FROM contact;
SELECT * FROM sign_in;
DELETE FROM sign_in;
SELECT * FROM health_score;