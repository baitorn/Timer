# ⏱️ Timer Pro — Réveil & Chronomètre

> Une application web simple, rapide et élégante qui combine **horloge en temps réel**, **réveil (alarme)** et **chronomètre**.

---

## 🚀 Démo en ligne

👉 **[Visite Timer Pro](https://baitorn.github.io/timer)**

---

## ✨ Aperçu du projet

**Timer Pro** est une application web légère qui fonctionne directement dans le navigateur 📱💻

Elle permet de :
- 🕒 **Afficher l'heure en temps réel** qui se met à jour chaque seconde
- 🔔 **Programmer une alarme (réveil)** avec une heure précise
- ⏱️ **Utiliser un chronomètre** avec Start / Stop / Reset
- 🎯 **Interface simple et rapide** sans complications

---

## 📸 Fonctionnalités détaillées

### 🕒 Horloge en direct
- Affiche l'heure actuelle au format HH:MM:SS
- Se met à jour automatiquement chaque seconde
- Affichage grand et lisible

### 🔔 Réveil intelligent
- Choix d'une heure précise via un input `time`
- Déclenchement automatique d'une alarme sonore à l'heure définie
- Son d'alarme continu jusqu'à l'arrêt
- Bouton pour **arrêter l'alarme** manuellement

### ⏱️ Chronomètre précis
- **▶️ Démarrer** : Lance le compte à rebours
- **⏸️ Arrêter** : Met en pause le chronomètre
- **🔄 Réinitialiser** : Remet le chronomètre à 00:00:00
- Affiche le temps en format HH:MM:SS

---

## 🧠 Technologies utilisées

- **HTML5** 🧱 - Structure sémantique
- **CSS3** 🎨 - Style moderne et responsive
- **JavaScript** ⚙️ - Logique et interactivité

---

## 📁 Structure du projet

```
timer/
├── index.html      📄 Page principale
├── style.css       🎨 Feuille de styles
├── script.js       ⚙️  Logique JavaScript
└── README.md       📖 Documentation
```

---

## 🚀 Utilisation

### 1️⃣ Horloge
L'horloge s'affiche automatiquement et se met à jour chaque seconde.

### 2️⃣ Alarme
1. Clique sur l'input **Heure de l'alarme**
2. Sélectionne l'heure souhaitée (ex: 14:30)
3. Clique sur **⏰ Régler l'alarme**
4. À l'heure définie, l'alarme sonnera automatiquement
5. Clique sur **🛑 Arrêter l'alarme** pour l'éteindre

### 3️⃣ Chronomètre
1. Clique sur **▶️ Démarrer** pour lancer le compte
2. Clique sur **⏸️ Arrêter** pour mettre en pause
3. Clique sur **🔄 Réinitialiser** pour revenir à 00:00:00

---

## 🎨 Design

L'application utilise un design **sombre et minimaliste** :
- Fond noir (#111)
- Texte blanc pour une bonne lisibilité
- Boutons interactifs avec effet hover
- Interface centrée et responsive

---

## 📝 Fichiers clés

### `index.html`
Structure HTML avec 3 sections principales :
- Horloge
- Alarme
- Chronomètre

### `style.css`
- Thème sombre moderne
- Responsive design
- Animations et transitions lisses

### `script.js`
- Gestion de l'horloge en temps réel
- Logique d'alarme avec son
- Chronomètre avec contrôles Start/Stop/Reset

---

## 🔧 Comment modifier

### Changer la couleur de fond
Dans `style.css`, ligne 3 :
```css
background: #111;  /* Remplace par ta couleur */
```

### Changer le son d'alarme
Dans `script.js`, ligne 49 :
```javascript
alarmSound = new Audio("https://www.soundjay.com/buttons/sounds/beep-07.mp3");
/* Remplace l'URL par un autre son */
```

---

## 🐛 Dépannage

**L'alarme ne sonne pas ?**
- Vérifie que le son est activé sur ton navigateur
- Assure-toi que l'URL du son est correcte

**L'horloge n'affiche pas l'heure ?**
- Vérifie que JavaScript est activé
- Ouvre la console (F12) pour voir les erreurs

---

## 👨‍💻 Auteur

**baitorn** - [Profil GitHub](https://github.com/baitorn)

---

## 📄 Licence

Ce projet est libre d'utilisation. Fais-en ce que tu veux ! 😊

---

**Enjoy! ⏰** - *Créé avec ❤️ en JavaScript*
