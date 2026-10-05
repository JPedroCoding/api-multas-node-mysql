SET NAMES utf8mb4;
CREATE TABLE IF NOT EXISTS multas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ait VARCHAR(20),
  placa VARCHAR(20),
  condutor VARCHAR(50),
  valor DECIMAL(10,2),
  status VARCHAR(20)
);

INSERT INTO multas (ait, placa, condutor, valor, status) VALUES
('AIT-001', 'ABC1D23', 'João Silva', 195.23, 'aberta'),
('AIT-002', 'XYZ4E56', 'Maria Souza', 88.38, 'paga'),
('AIT-003', 'QWE7R89', 'Carlos Lima', 293.47, 'aberta');