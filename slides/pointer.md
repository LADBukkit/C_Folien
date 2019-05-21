# Thema
### Zeiger

---

### Was sind Zeiger?
___
Zeiger sind Variablen,  
die nicht auf einen Wert,  
sondern auf eine Speicheradresse zeigen.
<!-- .element: class="fragment" -->

---

Also wenn wir eine Speichertabelle haben:

|Adresse|Wert|Variablentyp|Variable|
|:---:|:---:|:---:|:---:|
|...|
|0xAF|
|0xAE|0xAD|int*|b|
|0xAD|5|int|a|
|0xAC|
|...|

<!-- .element: class="fragment" -->
Dann ist **a** vom Typ **int** mit dem Wert 5  
Und **b** vom Typ **int\*** mit dem Wert 0xAD  
Also der Speicheradresse von **a**
<!-- .element: class="fragment" -->

---

Da **b** nun die Speicheradresse von **a** ist,  
können wir über **b** den Wert in **a** verändern.

---

**Beispielcode:**

```c
int main() {
    int a = 5;
    int* b = &a;
    *b = 7;
    printf("a = %i", a);

    return 0;
}
```

Hätte den Output
> a = 7

---

Die vielleicht unbekannten Zeichen auf der Vorherigen Folie sind:  
1. \*  
2. &

---

### Das Sternchen (\*)
___
Es hat zwei Bedeutungen:
1. Es zeigt an, dass eine Variable ein Pointer ist.
2. Das *Dereferenzieren*

<!-- .element: class="fragment" -->

--

1. Es Zeigt an, dass eine Variable ein Pointer ist.

```c
int* b;
```
Diese Bedeutung hat es,  
wenn es bei der Deklaration zwischen Typ und Variablennamen steht.
<!-- .element: class="fragment" -->

--

2. Das *Dereferenzieren*

```c
int* b;
...
printf("%i", *b);
```
Diese Bedeutung hat es,  
wenn es vor einem Zeiger steht.
<!-- .element: class="fragment" -->

<br>

Dabei zieht es den Wert aus der Speicherzelle heraus,  
auf die der Zeiger zeigt.  
<!-- .element: class="fragment" -->

---

### Das Und-Zeichen (&)
___
Es hat nur eine Bedeutung bei Zeigern.  
Es *Referenziert*

--

Das *Referenzieren*

```c
int a = 5;
int b = &a;
```

Dabei gibt es die Speicheradresse von der Variable aus, vor der es steht.
<!-- .element: class="fragment" -->

In diesem Fall die Speicheradresse von **a**
<!-- .element: class="fragment" -->

---

Dadurch kann man dann anderen Methoden erlauben,  
Die Werte von Variablen aus der eigenen Methode  
zu verändern.

<table>
<tr>
<td style="text-align:center">Mit Zeigern</td>
<td style="text-align:center">Ohne Zeiger</td>
</tr>
<!-- .element: style="border-style:none" -->
<tr>
<td>

```c
void erhoehen(int* intPtr) {
    *intPtr = (*intPtr) + 1;
}

int main() {
    int a = 5;
    erhoehen(&a);
    printf("a = %i\n", a);
    return 0;
}
```
</td>
<td>

```c
void erhoehen(int i) {
    i = i + 1;
}

int main() {
    int a = 5;
    erhoehen(a);
    printf("a = %i\n", a);
    return 0;
}
```
</td>
</tr>
<!-- .element: style="border-style:none" -->
<tr>
<td>

> a = 6
</td>
<td>

> a = 5
</td>
</tr>
<!-- .element: style="border-style:none" -->
</table>
<!-- .element: class="fragment" -->
