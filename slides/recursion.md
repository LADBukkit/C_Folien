# Thema:
### Rekursion

---

### Was ist Rekursion?
___
Rekursion bedeutet:
<!-- .element: class="fragment" -->  
**zu sich selber laufen**
<!-- .element: class="fragment" -->

---

Also im Grunde eine Methode,  
die zu sich selber läuft.

Also sich selbst aufruft.
<!-- .element: class="fragment" -->


---

**Nehmen wir als Beispiel eine Power-Funktion**

Die Formel dafür lautet:  
x<sup>n</sup> = x * x<sup>n-1</sup>
<!-- .element: class="fragment" -->  

---

**Als Code sehe das dann so aus:**  
```c
int power(int x, int n) {
    return x * power(x, n - 1);
}
```
<!-- .element: class="fragment" -->

---

Das ganze hat aber ein Makel

Es endet nie
<!-- .element: class="fragment" -->
Deswegen braucht jede **Rekursion**  
auch eine **Abbruchbedingung**
<!-- .element: class="fragment" -->

---

Was wissen wir über Potenzregeln?

Richtig: x<sup>0</sup> = 1
<!-- .element: class="fragment" -->

---

**Nun der verbesserte Code:**  
```c
int power(int x, int n) {
    if(n == 0) {
        return 1;
    }
    return x * power(x, n - 1);
}
```
<!-- .element: class="fragment" -->

---

### Ein Methodenaufruf durchgespielt:
___
power(4, 3);

--

Zuerst wird power mit den Werten x=4, n=3 aufgerufen.

>power weiß nicht, was 4<sup>3</sup> ist.  
>Aber power weiß, dass es 4 * 4<sup>2</sup> ist.

--

Das heißt:

Jetzt wird power mit den Werten x=4, n=2 aufgerufen.

>power weiß nicht, was 4<sup>2</sup> ist.  
>Aber power weiß, dass es 4 * 4<sup>1</sup> ist.

--

Daraus folgt:

power wird mit den Werten x=4, n=1 aufgerufen.

>power weiß nicht, was 4<sup>1</sup> ist.  
>Aber power weiß, dass es 4 * 4<sup>0</sup> ist.

--

Zum Schluss:

Wird power mit den Werten x=4, n=0 aufgerufen.

>power weiß was 4<sup>0</sup> ist.  
>4<sup>0</sup> ist 1.

--

Das Ganze geht dann wie eine Kettenreaktion nach oben:

>4<sup>0</sup> = 1  
>4<sup>1</sup> = 4 * 4<sup>0</sup> = 4 * 1 = 4  
>4<sup>2</sup> = 4 * 4<sup>1</sup> = 4 * 4 = 16  
>4<sup>3</sup> = 4 * 4<sup>2</sup> = 4 * 16 = 64

--

Das Ganze kann man auch als Tabelle darstellen:

<br>

| Methodenaufruf | if(n == 0) | return vR | return nR |
|---|---|---|---|
| power(4, 3) | false | 4 * power(4, 2) | 4 * 16 |
| power(4, 2) | false | 4 * power(4, 1) | 4 * 4 |
| power(4, 1) | false | 4 * power(4, 0) | 4 * 1 |
| power(4, 0) | true | 1 | - |

<br>

*vR = Vor Rekursion, nR = Nach Rekursion*
