
# Pasos

## Crear un proyecto node a partir de npm
npm init --yes

## Añadir la demendencia "tone" (dependencia de producción)
npm install tone

## Actualizar dependencias (no hacer a no ser que sepas lo q hace) (no hacer en proyectos serios)
npm update

## El empaquetador es una dependencia tambien, vamos a usar parcel (dependencia de desarrollo) (no le hace falta al usuario final)
npm install -D (tamién vale --save-dev) parcel

# Construir y arrancar la aplicacion
npx parcel src/index.html

## Meter esto debajo de <title> en index.html
    <link rel="stylesheet" href="./index.css">
    <script defer src="./index.js"></script>

# crear app.js y styles.css
copiar las weas en el html que sean script en app.js y las que sean styles en styles.css

# instalar react
npm install react react-dom

#