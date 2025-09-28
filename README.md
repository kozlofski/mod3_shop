# Praca zaliczeniowa - Moduł 3

## Stan pracy

Aplikacja obecnie pozwala na zarejestrowanie użytkownika, zalogowanie, korzystanie z koszyka.

Kliknięcie awatara powoduje wylogowanie.

Nie działają:
1. Strona główna
2. Strona produktu - filtrowanie po cenie, sortowanie, wyszukiwarka
3. Element `breadCrumb`
4. Inputy do modyfikacji ilości nie są prawidłowo wyświetlane pod względem wielkości oraz wielkości przycisków `+/-`
5. Nie zaimplementowałem funkcjonalności `Checkboxów` w koszyku (prawdopodobnie miały służyć do wybierania kilku produktów i usuwania ich zbiorczo)
6. Checkout - dodatkowe opłaty powinny być dodawane do bazy danych do tabeli `Order` - w związku z tym nie są też wyświetlane na podsumowaniu złożonego zamówienia
7. Formularz nowego adresu ma nieprawidłowy układ (i ostatni `Input` powinien byc typu `textarea`)
8. Nie zaimplementowałem wyświetlania szczegółów profilu (i listy dokonanych transakcji)

## Instrukcja uruchamiania

1. przejdź do katalogu `/shop`
2. zainstaluj odpowiednie paczki:

`npm install`

3. uruchom kontener z bazą danych:

`docker compose up -d`

4. podczas pierwszego uruchomienia aplikacji uruchom skrypt seedujący bazę danych (produkty i kategorie)

`npm run db:seed`

5. Uruchom serwer deweloperski (obecnie aplikacja nie przetestowana w wersji produkcyjnej)

`npm run dev`

Aplikacja zostanie odpalona na porcie `3000`. 
Uruchom w przeglądarce: `http://localhost:3000` 

---

Uwaga: (systemy Linuxowe)

zdarza się, że podczas awarii systemu, mimo ubicia kontenera, port 5432 (używany przez Postgres) może być zajęty. Użyj komendy:

`sudo lsof -i :5432` 

aby określić proces, który zajmuje ten port, a następnie ubuj proces:

`sudo kill <proces_id>`

---

