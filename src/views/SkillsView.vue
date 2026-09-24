<template>
  <div class="skills-section">
    <div class="skills-container">
      <h1 class="skills-title">Skills</h1>
      <section
        v-for="group in skillGroups"
        :key="group.id"
        class="skill-group"
        :aria-labelledby="`skills-${group.id}`"
      >
        <h2 :id="`skills-${group.id}`">{{ group.title }}</h2>
        <ul class="skills-grid">
          <li v-for="skill in group.items" :key="skill.name" class="skill-card">
            <img
              :src="skill.icon"
              :class="{ 'skill-icon-light': skill.light }"
              class="skill-icon"
              alt=""
              width="48"
              height="48"
              loading="lazy"
            />
            <span>{{ skill.name }}</span>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import html from 'devicon/icons/html5/html5-original.svg'
import css from 'devicon/icons/css3/css3-original.svg'
import javascript from 'devicon/icons/javascript/javascript-original.svg'
import typescript from 'devicon/icons/typescript/typescript-original.svg'
import threejs from 'devicon/icons/threejs/threejs-original.svg'
import bootstrap from 'devicon/icons/bootstrap/bootstrap-original.svg'
import tailwind from 'devicon/icons/tailwindcss/tailwindcss-original.svg'
import vue from 'devicon/icons/vuejs/vuejs-original.svg'
import vuetify from 'devicon/icons/vuetify/vuetify-original.svg'
import react from 'devicon/icons/react/react-original.svg'
import ionic from 'devicon/icons/ionic/ionic-original.svg'
import csharp from 'devicon/icons/csharp/csharp-original.svg'
import dotnet from '@/assets/technologies/dotnet.svg'
import php from 'devicon/icons/php/php-original.svg'
import laravel from 'devicon/icons/laravel/laravel-original.svg'
import python from 'devicon/icons/python/python-original.svg'
import fastapi from '@/assets/technologies/fastapi.svg'
import express from 'devicon/icons/express/express-original.svg'
import node from 'devicon/icons/nodejs/nodejs-original.svg'
import mysql from 'devicon/icons/mysql/mysql-original.svg'
import postgresql from 'devicon/icons/postgresql/postgresql-original.svg'
import sqlite from 'devicon/icons/sqlite/sqlite-original.svg'
import wordpress from 'devicon/icons/wordpress/wordpress-original.svg'
import drupal from 'devicon/icons/drupal/drupal-original.svg'
import shopify from '@/assets/technologies/shopify.svg'
import reactnative from 'devicon/icons/reactnative/reactnative-original.svg'
import expo from 'devicon/icons/expo/expo-original.svg'

const skillGroups = [
  {
    id: 'frontend',
    title: 'Front-end',
    items: [
      { name: 'HTML', icon: html },
      { name: 'CSS', icon: css },
      { name: 'JavaScript', icon: javascript },
      { name: 'TypeScript', icon: typescript },
      { name: 'Vue.js', icon: vue },
      { name: 'React.js', icon: react },
      { name: 'Three.js', icon: threejs, light: true },
    ],
  },
  {
    id: 'ui',
    title: 'UI e styling',
    items: [
      { name: 'Bootstrap', icon: bootstrap },
      { name: 'Tailwind CSS', icon: tailwind },
      { name: 'Vuetify', icon: vuetify },
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile',
    items: [
      { name: 'React Native', icon: reactnative },
      { name: 'Expo', icon: expo, light: true },
      { name: 'Ionic Framework', icon: ionic },
    ],
  },
  {
    id: 'backend',
    title: 'Back-end',
    items: [
      { name: 'C#', icon: csharp },
      { name: '.NET', icon: dotnet },
      { name: 'PHP', icon: php },
      { name: 'Laravel', icon: laravel },
      { name: 'Python', icon: python },
      { name: 'FastAPI', icon: fastapi },
      { name: 'Express.js', icon: express, light: true },
      { name: 'Node.js', icon: node },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    items: [
      { name: 'MySQL', icon: mysql },
      { name: 'PostgreSQL', icon: postgresql },
      { name: 'SQLite', icon: sqlite },
    ],
  },
  // {
  //   id: 'cms',
  //   title: 'CMS',
  //   items: [
  //     { name: 'WordPress', icon: wordpress, light: true },
  //     { name: 'Drupal', icon: drupal },
  //     { name: 'Shopify', icon: shopify, light: true },
  //   ],
  // },
]
</script>

<style scoped>
.skills-section {
  padding: 64px 20px 80px;
  background: #101419;
  color: #f8fafc;
}
.skills-container {
  max-width: 960px;
  margin: 0 auto;
}
.skills-title {
  margin: 0 0 48px;
  text-align: center;
  font-family: "Jersey 10", sans-serif;
  font-size: 48px;
}
.skill-group + .skill-group {
  margin-top: 40px;
}
.skill-group h2 {
  margin: 0 0 20px;
  padding-left: 12px;
  border-left: 3px solid #38bdf8;
  font-size: 22px;
  font-weight: 600;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.skill-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  min-height: 88px;
  padding: 16px;
  border: 1px solid #505050;
  border-radius: 14px;
  background: grey;
  text-align: left;
  font-size: 15px;
  font-weight: 600;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}
.skill-card:hover {
  border-color: #38bdf8;
  background: #898989;
}
.skill-icon {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  object-fit: contain;
}
.skill-card span {
  min-width: 0;
  overflow-wrap: anywhere;
}
.skill-icon-light {
  filter: brightness(0) invert(1);
}
@media (max-width: 767px) {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 575px) {
  .skills-section {
    padding: 48px 16px;
  }
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
  .skill-card {
    gap: 8px;
    padding: 12px 10px;
    font-size: 14px;
  }
  .skill-icon {
    width: 32px;
    height: 32px;
  }
}
@media (prefers-reduced-motion: reduce) {
  .skill-card {
    transition: none;
  }
}
</style>
