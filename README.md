# Trabajo con tensores

- Crear 2 tensores de 10x10 que se cargue automáticamente con numero del 1 al 9 y que se multipliquen entre sí hasta llegar a el primer tensor pese mas que 64MB, que se imprima en el navegador
que al final no queden tensores en memoria.


## Aclaración: 
- Se utilizó una dimensión de 100 x 100 en los tensores generados para que las operaciones de escalado del tensor duren menos tiempo.
- La operación de multiplicación de matrices no modifica las dimensiones del tensor, y por tanto tampoco su peso. Por lo tanto, se elije una operación de concatenación en su lugar. 