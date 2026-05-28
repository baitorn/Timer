# ⏱️ Timer Pro — Réveil & Chronomètre

> Une application web simple, rapide et élégante qui combine **horloge en temps réel**, **réveil (alarme)** et **chronomètre**.

---

## 🚀 Démo en ligne

👉 **[Visite Timer Pro](https://baitorn.github.io/timer)**

---

## ✨ Description

**Timer Pro** est une application web moderne regroupant :

- 🕒 Une **horloge en temps réel**
- 🔔 Un **réveil avec alarme sonore**
- ⏱️ Un **chronomètre précis**
- 📱 Une **interface responsive** compatible mobile et ordinateur
- ⚡ **Aucune dépendance externe** - Pur HTML/CSS/JavaScript

Le projet a été développé en **HTML5**, **CSS3** et **JavaScript vanille**.

---

## 📸 Fonctionnalités

- ✅ **Horloge en direct** - Affiche l'heure actuelle mise à jour chaque seconde
- ✅ **Réveil intelligent** - Sélectionne une heure et reçois une alarme sonore
- ✅ **Chronomètre** - Démarre, arrête et réinitialise le compte à rebours
- ✅ **Interface moderne** - Design sombre et minimaliste
- ✅ **100% responsive** - Fonctionne parfaitement sur téléphone et ordinateur
- ✅ **Déployé avec GitHub Pages** - Accessible en ligne instantanément

---

## 🧠 Technologies utilisées

- **HTML5** 🧱 - Structure sémantique
- **CSS3** 🎨 - Style moderne et animations
- **JavaScript** ⚙️ - Logique et interactivité (vanille, sans framework)

---

## 📁 Structure du projet

```
timer/
├── README.md       📖 Documentation
├── index.html      📄 Page principale
├── style.css       🎨 Feuille de styles
└── script.js       ⚙️ Logique JavaScript
```

---

## 🚀 Utilisation

### 🕒 Horloge
L'horloge s'affiche automatiquement et se met à jour chaque seconde en temps réel.

### 🔔 Alarme/Réveil
1. Clique sur l'input **Heure de l'alarme**
2. Sélectionne l'heure souhaitée (ex: 14:30)
3. Clique sur **⏰ Régler l'alarme**
4. À l'heure définie, l'alarme sonnera automatiquement
5. Clique sur **🛑 Arrêter l'alarme** pour l'éteindre

### ⏱️ Chronomètre
1. Clique sur **▶️ Démarrer** pour lancer le compte
2. Clique sur **⏸️ Arrêter** pour mettre en pause
3. Clique sur **🔄 Réinitialiser** pour revenir à 00:00:00

---

## 🎨 Design & Interface

L'application utilise un design **sombre et minimaliste** :
- 🖤 Fond noir (#111) pour réduire la fatigue oculaire
- ⚪ Texte blanc pour une excellente lisibilité
- 🎯 Boutons interactifs avec effets hover
- 📱 Interface centrée et 100% responsive
- ✨ Animations fluides et transitions lisses

---

## 🔧 Comment modifier

### Changer la couleur de fond
Dans `style.css`, ligne 3 :
```css
background: #111;  /* Remplace par ta couleur préférée */
```

### Changer le son d'alarme
Dans `script.js`, cherche la ligne de l'alarme :
```javascript
alarmSound = new Audio("https://www.soundjay.com/buttons/sounds/beep-07.mp3");
/* Remplace l'URL par un autre son */
```

---

## 🐛 Dépannage

**L'alarme ne sonne pas ?**
- ✅ Vérifie que le son est activé sur ton navigateur
- ✅ Assure-toi que l'URL du son est correcte
- ✅ Essaie un autre navigateur

**L'horloge n'affiche pas l'heure ?**
- ✅ Vérifie que JavaScript est activé
- ✅ Ouvre la console (F12) pour voir les erreurs
- ✅ Vide le cache du navigateur

**Le site affiche 404 ?**
- ✅ Attends 2-3 minutes que GitHub Pages se mette à jour
- ✅ Vide le cache de ton navigateur
- ✅ Réessaie dans une fenêtre privée/incognito

---

## 👨‍💻 Auteur

**baitorn** - [Profil GitHub](https://github.com/baitorn)

---

## 📄 Licence

Ce projet est libre d'utilisation. Fais-en ce que tu veux ! 😊

---

**Enjoy! ⏰** - *Créé avec ❤️ en JavaScript vanille*
