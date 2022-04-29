select 
    (select COUNT(*) from telaio where telaio.tipo = 'scorte' AND telaio.arnia_id = arnia.id) AS TipoA,
    (select COUNT(*) from telaio where telaio.tipo = 'covata' AND telaio.arnia_id = arnia.id) AS TipoB,
    (select COUNT(*) from melario where melario.arnia_id = arnia.id) AS numero_melari

from arnia
JOIN regina on (arnia.regina_id = regina.id)
WHERE arnia.id = 1