# Open Source Projelere Katki Nasil Yapilir

## Temel Terimler

- **Fork:** Baska birinin reposunun kendi hesabina kopyasini olusturmak.
- **Branch:** Ana koddan ayrilan, uzerinde bagimsiz calisilabilen bir dal.
- **PR (Pull Request):** Yaptigin degisikligi orijinal projeye "bunu ana koda eklemeyi dusunur musunuz?" diyerek sunman.
- **Merge:** Onaylanan degisikligin ana koda (`main`/`master`) birlestirilmesi.

## Acik Kaynak Bir Projeye PR Gonderme Adimlari

1. Katki yapmak istedigin repoyu fork'la.
2. Fork'ladigin repoyu kendi bilgisayarina `clone`'la.
3. Yeni bir branch ac (ozellik/duzeltme adiyla).
4. Degisikligi yap, test et, commit at.
5. Kendi fork'una `push` et.
6. Github uzerinden orijinal repoya PR ac; ne yaptigini ve neden yaptigini acikla.
7. Proje sahiplerinin geri bildirimlerine gore duzenleme yap.
8. Onaylanirsa proje sahibi PR'i `merge` eder.

## Merge Nasil Olur?

- PR onaylandiginda proje sahibi (veya yetkili katkici) degisiklikleri ana branch'e birlestirir.
- Merge oncesi genelde: kod incelemesi (code review), otomatik testlerin (CI) gecmesi ve celiskilerin (conflict) cozulmus olmasi beklenir.
