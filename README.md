# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Instala las dependencias necesarias

Primero, necesitarás instalar Jest, React Testing Library, SWC y algunas otras dependencias. Puedes hacerlo con los siguientes comandos

pnpm add -D jest @testing-library/react @testing-library/jest-dom swc-jest jest-environment-jsdom

Crea la configuración inicial de Jest

Ejecuta el siguiente comando para crear una configuración inicial de Jest

pnpm create jest@latest

Durante la configuración, selecciona "No" cuando se te pregunte si quieres usar Typescript para el archivo de configuración. Cuando se te pregunte por el entorno de prueba, selecciona "jsdom (browser-like)".
Si quieres que Jest genere informes de cobertura de código, puedes responder "Sí" a "Do you want Jest to add coverage reports?". Esto agregará la opción collectCoverage: true a tu configuración de Jest.
Para "Which provider should be used to instrument code for coverage?", puedes seleccionar "babel" si estás utilizando Babel para compilar tu código, o "v8" si no estás utilizando Babel.
Si quieres que Jest borre automáticamente las llamadas a mocks, las instancias, el contexto y los resultados antes de cada prueba, puedes responder "Sí" a "Automatically clear mock calls, instances, context and results before every test?". Esto agregará la opción clearMocks: true a tu configuración de Jest.

Cuando escribes pruebas, a menudo usarás "mocks" para simular el comportamiento de ciertas partes de tu código. Por ejemplo, podrías usar un mock para simular una llamada a una API.

La opción clearMocks: true le dice a Jest que borre automáticamente todas las llamadas a mocks, las instancias de mocks, el contexto de mocks y los resultados de mocks antes de cada prueba. Esto asegura que cada prueba se ejecute en un entorno limpio, sin ser afectada por los mocks utilizados en otras pruebas.

Los informes de cobertura de código son una forma de medir qué partes de tu código están siendo probadas. Cuando ejecutas tus pruebas con la opción collectCoverage: true, Jest generará un informe que te mostrará qué líneas de tu código fueron ejecutadas durante las pruebas y cuáles no. Esto puede ayudarte a identificar partes de tu código que necesitan más pruebas.

Modifica la configuración de Jest

Abre el archivo jest.config.cjs que se creó en el paso anterior y asegúrate de que tenga el siguiente contenido:

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.(t|j)sx?$': 'swc-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};

Esta configuración le dice a Jest que use jest-environment-jsdom como entorno de prueba, swc-jest para transformar tus archivos de código, y jest.setup.js para configurar el entorno de prueba antes de cada prueba.

rea un archivo de configuración para React Testing Library

Crea un archivo llamado jest.setup.js en la raíz de tu proyecto con el siguiente contenido:

require('@testing-library/jest-dom/extend-expect');

Este archivo importa las aserciones personalizadas de @testing-library/jest-dom para que puedas usarlas en tus pruebas.

Escribe tus pruebas

Ahora puedes empezar a escribir tus pruebas en archivos .test.js o .spec.js. Por ejemplo, aquí tienes una prueba básica para un componente de React:

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

jecuta tus prue

Finalmente, puedes ejecutar tus pruebas con pnpm run test. Si todo está configurado correctamente, deberías ver los resultados de tus pruebas en la consola.


¿Qué cambios haría a la configuración si le diera que sí quiero usar Typescript para el archivo de configuración?

Si eliges usar TypeScript para el archivo de configuración, Jest creará un archivo jest.config.ts en lugar de jest.config.cjs. La sintaxis del archivo será ligeramente diferente para adaptarse a TypeScript, pero las opciones de configuración serán las mismas. Sí, puedes dejar el archivo de configuración de Jest como jest.config.cjs incluso si estás usando TypeScript. Sin embargo, si eliges usar TypeScript para el archivo de configuración cuando ejecutas pnpm create jest@latest, Jest creará un archivo jest.config.ts en lugar de jest.config.cjs. En cualquier caso, la sintaxis y las opciones de configuración serán las mismas.

Además, necesitarás instalar ts-node para que Jest pueda interpretar el archivo de configuración de TypeScript. Puedes hacerlo con el siguiente comando:

pnpm add -D ts-node

Por último, si estás utilizando TypeScript en tu proyecto, también querrás instalar @types/jest para obtener las definiciones de tipos de Jest. Puedes hacerlo con el siguiente comando

pnpm add -D @types/jest

Si estás utilizando SWC para compilar tu código, entonces sí necesitarías un archivo swc.config.js. El contenido exacto del archivo dependerá de tus necesidades específicas, pero aquí tienes un ejemplo básico:

module.exports = {
  jsc: {
    parser: {
      syntax: 'ecmascript',
      jsx: true,
    },
    target: 'es2017',
  },
  env: {
    test: {
      plugins: [['@swc/plugin-transform-react', { runtime: 'automatic' }]],
    },
  },
};