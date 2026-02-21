CREATE TABLE units (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE operators (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  unit_id INT,
  FOREIGN KEY (unit_id) REFERENCES units(id)
);

CREATE TABLE identity (
  id INT AUTO_INCREMENT PRIMARY KEY,
  normalized_name VARCHAR(255),
  phonetic_key VARCHAR(255),
  document_hash VARCHAR(255),
  encrypted_document TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE student_profile (
  id INT AUTO_INCREMENT PRIMARY KEY,
  identity_id INT,
  grade_level VARCHAR(50),
  enrollment_status VARCHAR(50),
  unit_id INT,
  FOREIGN KEY (identity_id) REFERENCES identity(id),
  FOREIGN KEY (unit_id) REFERENCES units(id)
);

CREATE TABLE trust_metrics (
  id INT AUTO_INCREMENT PRIMARY KEY,
  entity_id INT,
  structural_score FLOAT,
  contextual_score FLOAT,
  behavior_score FLOAT,
  completeness_score FLOAT,
  global_trust FLOAT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE audit_log (
  id INT AUTO_INCREMENT PRIMARY KEY,
  entity_id INT,
  event_type VARCHAR(100),
  operator_id INT,
  timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (operator_id) REFERENCES operators(id)
);
