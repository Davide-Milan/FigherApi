INSERT INTO regina VALUES
    (1, 'rosso', CURRENT_DATE, NULL),
    (2, 'giallo', CURRENT_DATE, NULL),
    (3, 'verde', CURRENT_DATE, NULL),
    (4, 'blue', CURRENT_DATE, NULL),
    (5, 'nero', CURRENT_DATE, NULL),
    (6, 'fucsia', CURRENT_DATE, NULL)
;

INSERT INTO arnia (luogo, nota, trattamento, regina_id)
VALUES
    ('istrana', 'test', 'trattamento A', 1),
    ('sala', 'test2', 'trattamento B', 2),
    ('pezzan', 'test3', 'trattamento C', 3),
    ('ospedaletto', 'test4', 'trattamento D', 4),
    ('villanova', 'test5', 'trattamento E', 5)
;


INSERT INTO telaio (tipo, arnia_id)
VALUES
    ('scorte', 1),
    ('scorte', 1),
    ('scorte', 1),
    ('scorte', 1),
    ('covata', 1),
    ('covata', 1),
    ('covata', 1),
    ('covata', 1),
    ('covata', 1),
    ('covata', 1),   
    ('scorte', 2),
    ('scorte', 2),
    ('scorte', 2),
    ('scorte', 2),
    ('covata', 2),
    ('covata', 2),
    ('covata', 2),
    ('covata', 2),
    ('covata', 2),
    ('covata', 2), 
    ('scorte', 3),
    ('scorte', 3),
    ('scorte', 3),
    ('scorte', 3),
    ('covata', 3),
    ('covata', 3),
    ('covata', 3),
    ('covata', 3),
    ('covata', 3),
    ('covata', 3),
    ('scorte', 4),
    ('scorte', 4),
    ('scorte', 4),
    ('scorte', 4),
    ('covata', 4),
    ('covata', 4),
    ('covata', 4),
    ('covata', 4),
    ('covata', 4),
    ('covata', 4),
    ('scorte', 5),
    ('scorte', 5),
    ('scorte', 5),
    ('scorte', 5),
    ('covata', 5),
    ('covata', 5),
    ('covata', 5),
    ('covata', 5),
    ('covata', 5),
    ('covata', 5)
;

INSERT INTO melario (arnia_id, numero_telai_miele, numero_telai_vuoti, numero_telai_da_costruire)
VALUES
    (1, 3, 2, 4),
    (2, 2, 6, 1),
    (3, 1, 3, 5),
    (4, 4, 3, 2)
;