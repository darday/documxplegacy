---
sidebar_position: 2
---

# Uso de fórmulas en Excel

**1.-Fórmula BUSCARV**:

```jsx title="Fórmula BUSCARV:"
=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])
```

```jsx title="Ejemplo:"
=VLOOKUP(B2, 'T027'!B:E, 2, FALSE)
```

Esta fórmula busca el "Database Name" de la fila actual en la columna "Database Name" de "T027" y devuelve el nombre de la tabla correspondiente.

**2.-Fórmula IF**

```jsx title="Fórmula IF:"
=IF(logical_test, value_if_true, value_if_false)
```

```jsx title="Ejemplo:"
=IF(E2=VLOOKUP(A2, 'T027'!A:E, 5, FALSE), "Match", "No Match")
```

Compara el "TipoDeDato" en la fila actual de "V012" con el "TipoDeDato" correspondiente en "T027" y devuelve "Match" si coincide o "No Match" si no coincide.

**3.-Fórmula CONTAR.SI**

```jsx title="Fórmula CONTAR.SI:"
=COUNTIF(range, criteria)
```

```jsx title="Ejemplo:"
=COUNTIF('T027'!A:A, A2)
```

Cuenta el número de celdas en la columna "Server Name" de "T027" que coincide con el "Server Name" en la fila actual de "V012".

**4.-Fórmula EXACT**

```jsx title="Fórmula EXACT:"
=EXACT(text1, text2)
```

```jsx title="Ejemplo:"
=EXACT(E2, VLOOKUP(A2, 'T027'!A:E, 5, FALSE))
```

Compruebe si el "TipoDeDato" en la fila actual de "V012" es exactamente igual al "TipoDeDato" correspondiente en "T027".

