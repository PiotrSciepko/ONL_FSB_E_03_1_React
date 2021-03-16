![Coders-Lab-1920px-no-background](https://user-images.githubusercontent.com/30623667/104709387-2b7ac180-571f-11eb-9b94-517aa6d501c9.png)



## Zadanie 1 - rozwiązywane z wykładowcą

Stwórz funkcyjny komponent `CurrencyConverter`, który przyjmuje przez `props`:

- sygnaturę waluty bazowej `from`
- sygnaturę waluty kwotowanej `to`
- kwotę `value`
- przelicznik `rate`

Komponent ma zwracać taką przykładową strukturę HTML:

```html
<div>
  <strong>200.00</strong> EUR => <strong>224.55</strong> USD
</div>
```

dla wywołania:

```js
<CurrencyConverter from="EUR" to="USD" value={200} rate={1.12275} />
```

Stwórz również komponent `App`, który będzie renderował **trzy komponenty** `CurrencyConverter`, przekazując różne wartości w `props`.



## Zadanie 2

W pliku do zadania znajduje się komponent `Header` wyświetlający nagłówek strony internetowej.

Jest on napisany w sposób klasowy. Przepisz go oraz komponent `App` na działające **funkcje**.



## Zadanie 3

Stwórz komponent `AddNumbers` służący do dodawania dwóch liczb. Ma on przyjmować w `props`: `numberA`, `numberB` i renderować element `h1` z sumą tych dwóch liczb.

Stwórz również komponent `App`, który będzie renderował komponent `AddNumbers` przekazując przykładowe wartości w `props`.

Napisz oba te komponenty najpierw jako **funkcję**, a następnie jako **klasy**.

