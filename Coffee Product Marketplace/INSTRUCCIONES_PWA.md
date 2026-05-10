# Cafestiva Origin - Progressive Web App (PWA)

## ✅ Configuración Completada

Tu aplicación de Cafestiva Origin ha sido convertida en una Progressive Web App (PWA) que puede instalarse en dispositivos móviles y funcionar como una app nativa.

## 📱 Cómo Instalar la App en Android

### Desde Google Chrome (Android):
1. Abre la aplicación en Chrome en tu dispositivo Android
2. Toca el menú (tres puntos) en la esquina superior derecha
3. Selecciona "Agregar a la pantalla de inicio" o "Instalar app"
4. Confirma la instalación
5. La app aparecerá en tu pantalla de inicio con el icono de Cafestiva Origin

### Desde Google Chrome (iOS/iPhone):
1. Abre la aplicación en Safari (no Chrome) en tu iPhone
2. Toca el botón de compartir (cuadro con flecha hacia arriba)
3. Desplázate y selecciona "Agregar a la pantalla de inicio"
4. Confirma con "Agregar"
5. La app aparecerá en tu pantalla de inicio

## 🚀 Características de la PWA

- ✅ **Funciona sin conexión**: La app guardará contenido en caché para acceso offline
- ✅ **Instalable**: Se puede instalar como una app nativa en el dispositivo
- ✅ **Rápida**: Carga rápidamente gracias al almacenamiento en caché
- ✅ **Icono personalizado**: Usa el logo oficial de Cafestiva Origin
- ✅ **Modo standalone**: Se abre en pantalla completa sin la barra del navegador

## 📂 Archivos Creados

- `/public/manifest.json` - Configuración de la PWA
- `/public/sw.js` - Service Worker para funcionamiento offline
- `/public/icon-192.png` - Icono 192x192px
- `/public/icon-512.png` - Icono 512x512px
- `/index.html` - HTML principal con referencias PWA
- `/src/registerSW.ts` - Función de registro del Service Worker

## 🌐 Próximos Pasos para Distribución

Para que los usuarios puedan acceder e instalar la app:

1. **Desplegar en un hosting HTTPS** (requerido para PWAs):
   - Vercel (recomendado): https://vercel.com
   - Netlify: https://netlify.com
   - Firebase Hosting: https://firebase.google.com/hosting

2. **Compartir el enlace** de la app desplegada con tus clientes

3. **Opcional**: Crear un código QR del enlace para facilitar el acceso

## ⚠️ Importante

- Las PWAs **requieren HTTPS** para funcionar (excepto en localhost para pruebas)
- Una vez desplegada, los usuarios verán un mensaje de instalación la primera vez que visiten el sitio
- La app se actualizará automáticamente cuando publiques nuevas versiones

## 🎨 Personalización

El color del tema de la app es verde oscuro (#14532d) que coincide con los colores de Cafestiva Origin.
