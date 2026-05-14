# Skolas darbu plānotājs

Šis ir vienkāršs skolēna projekts, kas darbojas tikai pārlūkā ar HTML, CSS un JavaScript.

## Kā palaist

1. Atver projekta mapi.
2. Atver failu `index.html` jebkurā pārlūkā.

Nav nepieciešams instalēt Java, JDK, `javac` vai citas programmas.

## Ko dara faili

- `index.html` ir galvenā lapa ar virsrakstu, ievades laukiem un uzdevumu sarakstu.
- `style.css` nosaka lapas izskatu, krāsas, pogas un uzdevumu kartītes.
- `script.js` pievieno uzdevumus, parāda tos, atzīmē kā izpildītus, dzēš un saglabā pārlūkā.
- `README.md` paskaidro, kā projekts darbojas un kā to palaist.

## Kā darbojas localStorage

`localStorage` ir pārlūka atmiņa, kur var saglabāt datus. Šajā projektā visi uzdevumi tiek saglabāti ar atslēgu `schoolTasks`.

Kad lietotājs pievieno, izpilda vai dzēš uzdevumu, saraksts tiek saglabāts pārlūkā. Kad lapa tiek aizvērta un vēlāk atkal atvērta, saglabātie uzdevumi paliek redzami.

## Funkcijas

- Var pievienot jaunu skolas uzdevumu
- Var ievadīt nosaukumu, priekšmetu, nodošanas datumu un aprakstu
- Uzdevumi parādās kā kartītes
- Var atzīmēt uzdevumu kā izpildītu
- Var dzēst uzdevumu
- Ja datums ir pagājis, parādās teksts `Nokavēts`
- Var notīrīt aizpildītos formas laukus
